package com.axis.jobOpporunites.Dao;

import java.util.List;

import com.axis.jobOpporunites.model.Interview;


public interface InterviewDao {
	
	public Interview createInterview(int jobseekerid, String company, String location, String datetime, String flag);
	
	public String acceptInterview(int jobseekerid);
	
	public List<Interview> getAllInterviews(int jobseekerid);

}
