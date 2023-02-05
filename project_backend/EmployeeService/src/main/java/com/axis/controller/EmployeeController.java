package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axis.model.Employee;
import com.axis.service.EmployeeService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAll(){
		return new ResponseEntity<List<Employee>>(employeeService.employeeDetails(),HttpStatus.OK);
	}
	
	@GetMapping("/employee/{employeeId}")
	public ResponseEntity<Employee> getEmployee(@PathVariable String employeeId) {
		return new ResponseEntity<Employee>(employeeService.findByEmployeeId(employeeId),HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		return new ResponseEntity<Employee>(employeeService.addEmployee(employee),HttpStatus.OK);
	}
	@PutMapping("/edit/{employeeId}")
	public ResponseEntity<String> editProfile(@RequestBody Employee employee,@PathVariable String employeeId) {
		return new ResponseEntity<String>( employeeService.updateProfile(employee, employeeId),HttpStatus.OK);
		 
	}
	@DeleteMapping("/delete/{employeeId}")
	public ResponseEntity<String> delEmployee(@PathVariable String employeeId) {
		return new ResponseEntity<String>(employeeService.deleteEmployee(employeeId),HttpStatus.OK);
	}
	
	@PutMapping("/change/password/{employeeId}")
	public ResponseEntity<String> changePassword(@RequestBody Employee employee,@PathVariable String employeeId)
	{
		return new ResponseEntity<String>(employeeService.updatePassword(employee, employeeId),HttpStatus.OK);
	}
	@GetMapping("/validate")
	   public String validateUser(@RequestBody Employee user){
		   String msg = "";	
		   try {
			   Employee userData = employeeService.findByUserNameAndPassword(user.getUserName(),user.getPassword());
			   if( user.getUserName().equals(userData.getUserName()) && user.getPassword().equals(userData.getPassword())) {
					 msg = "valid";
				   }else {
					   return "invalid";
		       } 
		   }catch(Exception ex) {
			   	msg ="invalid";
		   } 	   
		   
		return msg; 		   
	   }
	
	 @GetMapping("/stakeholders")
	 public Object getStakeholders(){
			List object=restTemplate.getForObject("http://STAKEHOLDERS-SERVICE/api/v3/stakeholders",List.class);
			return object;
			
	 }
	 @GetMapping("/salary/{month}")
	 public Object getSalarySlips(@PathVariable String month){
			List object=restTemplate.getForObject("http://SALARY-SERVICE/api/v3/salary/"+month,List.class);
			return object;
			
	 }
	 @GetMapping("/supportteam/{projectName}")
	 public Object getSupportTeam(@PathVariable String projectName){
			List object=restTemplate.getForObject("http://SUPPORTTEAM-SERVICE/api/v3/supportteam/"+projectName,List.class);
			return object;
			
	 }
	 @GetMapping("/jobs/{projectName}")
	 public Object getJobs(@PathVariable String projectName){
			List object=restTemplate.getForObject("http://JOBS-SERVICE/api/v3/jobs/"+projectName,List.class);
			return object;
			
	 }
	 
//	 @GetMapping("/")
//	 public Object getAppointment(){
//			List object=restTemplate.getForObject("http://DOCTOR-SERVICE/api/v6/signin",List.class);
//			return object;
//			
//	 }

	
}
