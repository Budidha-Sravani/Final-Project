/**
 * 
 */
package com.axis.jobOpporunites.Dao.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import com.axis.jobOpporunites.Dao.JobSeekerDao;
import com.axis.jobOpporunites.model.JobPostingsView;
import com.axis.jobOpporunites.model.JobSeeker;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Repository
@Transactional
@Service
public class JobSeekerDaoImpl implements JobSeekerDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<?> filterJobs(JobPostingsView jpv, List<?> jobIds) {
		boolean locationFlag = false, companyFlag = false, salaryFlag = false;
		String selectQuery = "SELECT jobId, title, description, responsibilites, location, salary, companyId, state, companyName FROM JobPostingsView jpv WHERE jobId in :jobIds";
		String[] salaries = null;
		if (null != jpv.getLocation()) {
			locationFlag = true;
			selectQuery = selectQuery.concat(" AND jpv.location IN (:locations) ");
		}
		if (null != jpv.getCompanyName()) {
			companyFlag = true;
			selectQuery = selectQuery.concat(" AND jpv.companyName IN (:companies) ");
		}
		if (null != jpv.getSalary()) {
			salaryFlag = true;
			selectQuery = selectQuery.concat(" AND jpv.salary >= :salary1 AND jpv.salary <= :salary2 ");
		}
		Query query = entityManager.createQuery(selectQuery);
		query.setParameter("jobIds", jobIds);
		if (locationFlag) {
			String[] location = jpv.getLocation().split(",");
			List<String> locationList = Arrays.asList(location);
			query.setParameter("locations", locationList);
		}
		if (companyFlag) {
			String[] companyArray = jpv.getCompanyName().split(",");
			List<String> companyList = Arrays.asList(companyArray);
			query.setParameter("companies", companyList);
		}
		if (salaryFlag) {
			salaries = jpv.getSalary().split(",");
			query.setParameter("salary1", salaries[0]);
			query.setParameter("salary2", salaries[1]);
		}
		List<?> jpListRes = query.getResultList();

		return jpListRes;

	}

	@Override
	public JobSeeker createJobSeeker(JobSeeker jseeker) throws Exception {
		try {
			entityManager.persist(jseeker);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return jseeker;
	}

	@Override
	public JobSeeker getJobSeeker(int id) {
		JobSeeker js = null;
		try {
			js = entityManager.find(JobSeeker.class, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return js;
	}

	@Override
	public JobSeeker updateJobSeeker(JobSeeker js) {
		JobSeeker jobseeker = getJobSeeker(js.getJobseekerId());
		jobseeker.setEmailId(js.getEmailId());
		jobseeker.setFirstName(js.getFirstName());
		jobseeker.setLastName(js.getLastName());
		jobseeker.setHighestEducation(js.getHighestEducation());
		jobseeker.setPassword(js.getPassword());
		jobseeker.setSkills(js.getSkills());
		jobseeker.setWorkEx(js.getWorkEx());
		try {
			if (jobseeker != null) {
				entityManager.merge(jobseeker);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return jobseeker;
	}

	@Override
	public List<String> PasswordLookUp(String emailid) {

		Query query = entityManager.createQuery("SELECT password FROM JobSeeker js WHERE js.emailId = :emailId");
		query.setParameter("emailId", emailid);
		List<String> list = new ArrayList<String>();
		List<?> querylist = query.getResultList();
		for (Iterator<?> iterator = querylist.iterator(); iterator.hasNext();) {
			String pwd = (String) iterator.next();
			list.add(pwd);
		}
		return list;
	}

	@Override
	public void verify(JobSeeker j) {
		JobSeeker jobseeker = getJobSeeker(j.getJobseekerId());
		jobseeker.setVerified(true);
		try {
			if (jobseeker != null) {
				entityManager.merge(jobseeker);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public List<?> searchJobs(String searchString) {
		searchString = "%" + searchString + "%";
		searchString = searchString.replaceAll(" ", "% %");
		String searchStringArray[] = searchString.split(" ");
		String selectQuery = "SELECT jobId FROM JobPostingsView jp";
		if (!searchString.isEmpty()) {
			selectQuery = selectQuery.concat(" WHERE ");
		}

		for (int i = 0; i < searchStringArray.length; i++) {
			selectQuery = selectQuery.concat("jp.keywords LIKE :searchParam" + i);
			if (i != searchStringArray.length - 1) {
				selectQuery = selectQuery.concat(" AND ");
			}
		}

		Query query = entityManager.createQuery(selectQuery);
		for (int i = 0; i < searchStringArray.length; i++) {
			query.setParameter("searchParam" + i, searchStringArray[i]);
		}

		List<?> list = query.getResultList();
		try {
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	
	@Override
	public List<Integer> getUserIdFromEmail(String emailid) {

		Query query = entityManager.createQuery("SELECT jobseekerId FROM JobSeeker js WHERE js.emailId = :emailId");
		query.setParameter("emailId", emailid);
		List<Integer> list = new ArrayList<Integer>();
		List<?> querylist = query.getResultList();
		for (Iterator<?> iterator = querylist.iterator(); iterator.hasNext();) {
			int uid = (int) iterator.next();
			list.add(uid);
		}
		return list;
	}



}
