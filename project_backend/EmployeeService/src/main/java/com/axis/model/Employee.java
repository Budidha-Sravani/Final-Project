package com.axis.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
	@Id
	private String employeeId;
	private String name;
	private String userName;
	private String password;
	private String email;
	private String supervisorName;
	private String projectName;
	private LocalDate joiningDate;
	private LocalDate dateOfbirth;
	private Long phoneNumber;
	private String address;
	private String gender;
	public Employee(LocalDate dateOfbirth,String employeeId, String name, String userName, String password, String email,
			String supervisorName, String projectName, LocalDate joiningDate, Long phoneNumber, String address,
			String gender) {
		super();
		this.dateOfbirth = dateOfbirth;
		this.employeeId = employeeId;
		this.name = name;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.supervisorName = supervisorName;
		this.projectName = projectName;
		this.joiningDate = joiningDate;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.gender = gender;
	}
	public Employee(LocalDate dateOfbirth,String name,String address,String email,long phoneNumber,String gender) {
		super();
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.gender = gender;
		this.dateOfbirth = dateOfbirth;
	}
	public Employee(String password) {
		this.password=password;
		
	}
	public Employee(String projectName,String supervisorName) {
		this.supervisorName = supervisorName;
		this.projectName = projectName;
		
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSupervisorName() {
		return supervisorName;
	}
	public void setSupervisorName(String supervisorName) {
		this.supervisorName = supervisorName;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public LocalDate getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(LocalDate joiningDate) {
		this.joiningDate = joiningDate;
	}
	public Long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDateOfbirth() {
		return dateOfbirth;
	}
	public void setDateOfbirth(LocalDate dateOfbirth) {
		this.dateOfbirth = dateOfbirth;
	}
	
	
}
