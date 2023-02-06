package com.axis.service;

import java.util.List;
import com.axis.model.SupportTeam;

public interface SupportTeamService {
	
	public SupportTeam addSupport(SupportTeam support);
	public List<SupportTeam> getAllSupportTeam();
	public SupportTeam getSupportById(String id);
	public SupportTeam updateSupport(String id,SupportTeam support);
	public String deleteSupport(String id);

}
