package com.axis.jobOpporunites.Dao;

import com.axis.jobOpporunites.model.JobPosting;


public interface JobPostingDao {

	JobPosting createJobPosting(JobPosting job, int cid);

	JobPosting getJobPosting(int id);

	boolean deleteJobPosting(int id);

	JobPosting updateJobPosting(JobPosting job);

}