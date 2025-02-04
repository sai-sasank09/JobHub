package com.jobportal.repository;

import com.jobportal.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobApplicationRepository extends JpaRepository<JobApplication, String> {
    List<JobApplication> findByJobId(String jobId);
    List<JobApplication> findByUserId(String userId);
    boolean existsByJobIdAndUserId(String jobId, String userId);
}