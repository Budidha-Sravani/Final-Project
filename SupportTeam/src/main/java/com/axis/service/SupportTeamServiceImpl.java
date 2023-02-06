package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.IDNotFoundException;
import com.axis.exception.SupportException;
import com.axis.model.SupportTeam;
import com.axis.repository.SupportTeamRepository;
import com.axis.util.AppConstant;

@Service
public class SupportTeamServiceImpl implements SupportTeamService {
	
	@Autowired
	SupportTeamRepository supportTeamRepository;
	
	@Override
	
	public SupportTeam addSupport(SupportTeam support) {
		if(support.getName()=="") {
			throw new SupportException(AppConstant.SUPPORT_ERR);
		}
		else if(support.getEmail()=="") {
			throw new SupportException(AppConstant.EMAIL_ERR);
		}
		
		return supportTeamRepository.save(support);
	}

	@Override
	public List<SupportTeam> getAllSupportTeam() {
		// TODO Auto-generated method stub
		return supportTeamRepository.findAll();
	}

	@Override
	public SupportTeam getSupportById(String id) {
		// TODO Auto-generated method stub
		return supportTeamRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstant.SUPPORT_ID_NOT_FOUND_MESSAGE));
	}

	@Override
	public SupportTeam updateSupport(String id, SupportTeam support) {
		// TODO Auto-generated method stub
		SupportTeam sprt=supportTeamRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstant.SUPPORT_ID_NOT_FOUND_MESSAGE));
		sprt.setName(support.getName());
		sprt.setProjectname(support.getProjectname());
		sprt.setDesignation(support.getDesignation());
		sprt.setEmail(support.getEmail());
		sprt.setPhoneno(support.getPhoneno());
		return supportTeamRepository.save(sprt);
	}

	@Override
	public String deleteSupport(String id) {
		// TODO Auto-generated method stub
		SupportTeam sprt=supportTeamRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstant.SUPPORT_ID_NOT_FOUND_MESSAGE));
		supportTeamRepository.delete(sprt);
		return AppConstant.DELETE_MSG;
	}

}
