package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.SupportTeam;

public interface SupportTeamRepository extends JpaRepository<SupportTeam, String> {
			public SupportTeam findByProjectname(String projectname);
			
	
	
}
