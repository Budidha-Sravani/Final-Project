package com.axis.controller;

import java.awt.PageAttributes.MediaType;
import java.net.http.HttpHeaders;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axis.SupportTeam;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")

public class AdminController {
			
					
			@Autowired
			RestTemplate restTemplate;
			
					
					
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
			 @GetMapping("/supportteam/get/{id}")
			 public Object getSupportTeam(@PathVariable String id){
				 System.out.println("hello");
				
 ResponseEntity<Object> exchange = restTemplate.exchange("http://localhost:8081/api/v1/get/"+id,HttpMethod.GET,null,Object.class);
					System.out.println(exchange+"exchange");
					return exchange.getBody();
					
			 }
			 
			 @GetMapping("/supportteam/{projectname}")
			 public Object findByProjectname(@PathVariable String projectname){
				 System.out.println("hello");
				
 ResponseEntity<Object> exchange = restTemplate.exchange("http://localhost:8081/api/v1/"+projectname,HttpMethod.GET,null,Object.class);
					System.out.println(exchange+"exchange");
					return exchange.getBody();
					
			 }
			 
			 @GetMapping("/supportteam")

			    public List<Object> getAllSupportTeam(){

			     System.out.println("hello");

			              String serviceURL ="http://localhost:8081/api/v1/getAll";

			ResponseEntity<List<Object>> exchange = restTemplate.exchange(serviceURL,HttpMethod.GET,null,new ParameterizedTypeReference<List<Object>>(){});

			     System.out.println(exchange+"exchange");

			     return exchange.getBody();

			    }
			 
			 @DeleteMapping("/supportteam/delete/{id}")
			 public String deleteSupport(@PathVariable String id){
				 System.out.println("hello");
				
 ResponseEntity<String> exchange = restTemplate.exchange("http://localhost:8081/api/v1/delete/"+id,HttpMethod.DELETE,null,String.class);
					System.out.println(exchange+"exchange");
					return exchange.getBody();
					
			 }
			 
			 @PostMapping("/supportteam/add")
			  public Object addSupport(@RequestBody RequestBody requestBody) {
			    RestTemplate restTemplate = new RestTemplate();
			    String url = "http://localhost:8081/api/v1/add";

			    HttpEntity<RequestBody> entity = new HttpEntity<>(requestBody);

			    return restTemplate.exchange(url, HttpMethod.POST, entity, Object.class).getBody();
			  }
			 
			 @PutMapping("/supportteam/update/{id}")
			  public Object updateSupport(@RequestBody String id) {
			    RestTemplate restTemplate = new RestTemplate();
			    String url = "http://localhost:8081/api/v1/update"+id;

			    HttpEntity<Object> entity = new HttpEntity<>(id);

			    return restTemplate.exchange(url, HttpMethod.PUT, entity, Object.class).getBody();
			  }
			 @GetMapping("/employees")

			    public List<Object> employeeDetails(){

			     System.out.println("hello");

			              String serviceURL ="http://localhost:9002/api/v1/employees";

			ResponseEntity<List<Object>> exchange = restTemplate.exchange(serviceURL,HttpMethod.GET,null,new ParameterizedTypeReference<List<Object>>(){});

			     System.out.println(exchange+"exchange");

			     return exchange.getBody();

			    }
			 @GetMapping("employee/{employeeId}")
			 public Object getEmployee(@PathVariable String employeeId){
				 System.out.println("hello");
				
 ResponseEntity<Object> exchange = restTemplate.exchange("http://localhost:9002/api/v1/employee/"+employeeId,HttpMethod.GET,null,Object.class);
					System.out.println(exchange+"exchange");
					return exchange.getBody();
					
			 }
			 @PostMapping("/add")
			  public Object addEmployee(@RequestBody RequestBody requestBody) {
			    RestTemplate restTemplate = new RestTemplate();
			    String url = "http://localhost:9002/api/v1/add";

			    HttpEntity<RequestBody> entity = new HttpEntity<>(requestBody);

			    return restTemplate.exchange(url, HttpMethod.POST, entity, Object.class).getBody();
			  }
			 @PutMapping("/edit/{employeeId}")
			  public Object editProfile(@RequestBody String employeeId) {
			    RestTemplate restTemplate = new RestTemplate();
			    String url = "http://localhost:9002/api/v1/edit"+employeeId;

			    HttpEntity<Object> entity = new HttpEntity<>(employeeId);

			    return restTemplate.exchange(url, HttpMethod.PUT, entity, Object.class).getBody();
			  }
			 @DeleteMapping("delete/{employeeId}")
			 public String delEmployee(@PathVariable String employeeId){
				 System.out.println("hello");
				
 ResponseEntity<String> exchange = restTemplate.exchange("http://localhost:9002/api/v1/delete/"+employeeId,HttpMethod.DELETE,null,String.class);
					System.out.println(exchange+"exchange");
					return exchange.getBody();
					
			 }



			 
			 
			 @GetMapping("/jobs/{projectName}")
			 public Object getJobs(@PathVariable String projectName){
					List object=restTemplate.getForObject("http://JOBS-SERVICE/api/v3/jobs/"+projectName,List.class);
					return object;
					
			 }
			 
//			 @GetMapping("/")
//			 public Object getAppointment(){
//					List object=restTemplate.getForObject("http://DOCTOR-SERVICE/api/v6/signin",List.class);
//					return object;
//					
//			 }

			
		}
