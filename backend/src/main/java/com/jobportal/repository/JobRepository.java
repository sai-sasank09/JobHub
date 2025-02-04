package com.jobportal.repository;

import com.jobportal.model.Job;
import com.jobportal.model.JobType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface JobRepository extends JpaRepository<Job, String> {
    Page<Job> findByTitleContainingIgnoreCaseOrCompanyContainingIgnoreCase(
        String title, String company, Pageable pageable);
    
    Page<Job> findByLocationContainingIgnoreCase(String location, Pageable pageable);
    
    Page<Job> findByType(JobType type, Pageable pageable);
    
    @Query("SELECT j FROM Job j WHERE " +
           "LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.company) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.location) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    Page<Job> search(String keyword, Pageable pageable);
}