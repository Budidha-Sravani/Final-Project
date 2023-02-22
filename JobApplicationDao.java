package com.axis.jobOpporunites.Dao;

import com.axis.jobOpporunites.model.JobApplication;


public interface JobApplicationDao {

	boolean cancel(int jobAppId);

	JobApplication apply(int jobseekerId, int jobId, boolean resumeFlag, String resumePath);


	JobApplication getJobApplication(int jobAppId);


	JobApplication modifyJobApplicationStatus(int jobAppId, int state);

	JobApplication updateApplication(JobApplication ja);

}
