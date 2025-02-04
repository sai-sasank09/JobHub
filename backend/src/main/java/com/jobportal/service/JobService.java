package com.jobportal.service;

import com.jobportal.dto.JobRequest;
import com.jobportal.exception.ResourceNotFoundException;
import com.jobportal.model.Job;
import com.jobportal.model.User;
import com.jobportal.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobRepository jobRepository;
    private final UserService userService;

    public Page<Job> searchJobs(String keyword, Pageable pageable) {
        if (keyword != null && !keyword.isEmpty()) {
            return jobRepository.search(keyword, pageable);
        }
        return jobRepository.findAll(pageable);
    }

    public Job getJobById(String id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));
    }

    @Transactional
    public Job createJob(JobRequest request) {
        User employer = userService.getCurrentUser();
        
        Job job = new Job();
        job.setTitle(request.getTitle());
        job.setCompany(request.getCompany());
        job.setLocation(request.getLocation());
        job.setType(request.getType());
        job.setDescription(request.getDescription());
        job.setRequirements(request.getRequirements());
        job.setSalaryRange(request.getSalaryRange());
        job.setCompanyLogo(request.getCompanyLogo());
        job.setEmployer(employer);
        
        return jobRepository.save(job);
    }

    @Transactional
    public Job updateJob(String id, JobRequest request) {
        Job job = getJobById(id);
        User currentUser = userService.getCurrentUser();
        
        if (!job.getEmployer().getId().equals(currentUser.getId())) {
            throw new IllegalStateException("Not authorized to update this job");
        }
        
        job.setTitle(request.getTitle());
        job.setCompany(request.getCompany());
        job.setLocation(request.getLocation());
        job.setType(request.getType());
        job.setDescription(request.getDescription());
        job.setRequirements(request.getRequirements());
        job.setSalaryRange(request.getSalaryRange());
        job.setCompanyLogo(request.getCompanyLogo());
        
        return jobRepository.save(job);
    }

    @Transactional
    public void deleteJob(String id) {
        Job job = getJobById(id);
        User currentUser = userService.getCurrentUser();
        
        if (!job.getEmployer().getId().equals(currentUser.getId())) {
            throw new IllegalStateException("Not authorized to delete this job");
        }
        
        jobRepository.delete(job);
    }
}