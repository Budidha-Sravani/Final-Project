package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Support Team")
public class SupportTeam {
	
	@Id
	private String id;
	private String name;
	private String projectname;
	private String designation;
	private String email;
	private Integer phoneno;
	
	public SupportTeam(String id, String name, String projectname, String designation, String email, Integer phoneno) {
		super();
		this.id = id;
		this.name = name;
		this.projectname = projectname;
		this.designation = designation;
		this.email = email;
		this.phoneno = phoneno;
	}

	public SupportTeam() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProjectname() {
		return projectname;
	}

	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(Integer phoneno) {
		this.phoneno = phoneno;
	}
	
	}
