package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.Employee;
import com.axis.repository.EmployeeRepository;
@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	EmployeeRepository employeeRepository;
	
	
	
	@Override
	public Employee findByEmployeeId(String employeeId) {
		Employee employ=employeeRepository.findByEmployeeId(employeeId);
		return employ;
	}

	@Override
	public Employee addEmployee(Employee employee) {
		// TODO Auto-generated method stub
		Employee employ=employeeRepository.save(employee);
		return employ;
	}

	
	@Override
	public String deleteEmployee(String employeeId) {
		// TODO Auto-generated method stub
		Employee employ=employeeRepository.findByEmployeeId(employeeId);
		if(employ!=null) {
			employeeRepository.delete(employ);
			return "Deleted successfully";
		}
		else {
			return "No Data found of the "+employeeId;
		}
	}

	

	@Override
	public String updateProfile(Employee employee, String employeeId) {
		Employee employ=employeeRepository.findByEmployeeId(employeeId);
		employ.setName(employee.getName());
		employ.setGender(employee.getGender());
		employ.setPhoneNumber(employee.getPhoneNumber());
		employ.setAddress(employee.getAddress());
		employ.setDateOfbirth(employee.getDateOfbirth());
		employ.setEmail(employee.getEmail());
//		employ.setJoiningDate(employ.getJoiningDate());
//		employ.setEmployeeId(employ.getEmployeeId());
//		employ.setPassword(employ.getPassword());
//		employ.setProjectName(employ.getProjectName());
//		employ.setSupervisorName(employ.getSupervisorName());
//		employ.setUserName(employ.getUserName());
		employeeRepository.save(employ);
		return "upDated Successfully";
	}

	@Override
	public List<Employee> employeeDetails() {
		// TODO Auto-generated method stub
		List<Employee> list=employeeRepository.findAll();
		return list;
	}

	@Override
	public String updatePassword(Employee employee, String employeeId) {
		// TODO Auto-generated method stub
		Employee employ=employeeRepository.findByEmployeeId(employeeId);
		if(employ==null) {
			return "No Data found with the employee ID:"+employeeId;
		}
		else {
			employ.setPassword(employee.getPassword());
			employeeRepository.save(employ);
			return "Password Changed successfully";
		}
	}

	@Override
	public String updateProject(Employee employee, String employeeId) {
		// TODO Auto-generated method stub
		Employee employ=employeeRepository.findByEmployeeId(employeeId);
		if(employ==null) {
			return "No Data found with the employee ID:"+employeeId;
		}
		else {
			employ.setProjectName(employee.getProjectName());
			employ.setSupervisorName(employee.getSupervisorName());
			employeeRepository.save(employ);
			return "Updated Project Details successfully";
		}
	}

	@Override
	public Employee findByUserNameAndPassword(String userName, String password) {
		// TODO Auto-generated method stub
		return employeeRepository.findByUserNameAndPassword(userName, password);
	}

	
}
