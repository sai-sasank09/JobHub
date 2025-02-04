package com.jobportal.service;

import com.jobportal.dto.JobApplicationRequest;
import com.jobportal.exception.ResourceNotFoundException;
import com.jobportal.model.ApplicationStatus;
import com.jobportal.model.Job;
import com.jobportal.model.JobApplication;
import com.jobportal.model.User;
import com.jobportal.repository.JobApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobApplicationService {
    private final JobApplicationRepository applicationRepository;
    private final JobService jobService;
    private final UserService userService;

    @Transactional
    public JobApplication apply(JobApplicationRequest request) {
        User applicant = userService.getCurrentUser();
        Job job = jobService.getJobById(request.getJobId());
        
        if (applicationRepository.existsByJobIdAndUserId(job.getId(), applicant.getId())) {
            throw new IllegalStateException("You have already applied to this job");
        }
        
        JobApplication application = new JobApplication();
        application.setJob(job);
        application.setUser(applicant);
        application.setCoverLetter(request.getCoverLetter());
        
        return applicationRepository.save(application);
    }

    public List<JobApplication> getApplicationsByJob(String jobId) {
        User currentUser = userService.getCurrentUser();
        Job job = jobService.getJobById(jobId);
        
        if (!job.getEmployer().getId().equals(currentUser.getId())) {
            throw new IllegalStateException("Not authorized to view these applications");
        }
        
        return applicationRepository.findByJobId(jobId);
    }

    public List<JobApplication> getMyApplications() {
        User currentUser = userService.getCurrentUser();
        return applicationRepository.findByUserId(currentUser.getId());
    }

    @Transactional
    public JobApplication updateStatus(String id, String status) {
        JobApplication application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        
        User currentUser = userService.getCurrentUser();
        if (!application.getJob().getEmployer().getId().equals(currentUser.getId())) {
            throw new IllegalStateException("Not authorized to update this application");
        }
        
        application.setStatus(ApplicationStatus.valueOf(status.toUpperCase()));
        return applicationRepository.save(application);
    }
}