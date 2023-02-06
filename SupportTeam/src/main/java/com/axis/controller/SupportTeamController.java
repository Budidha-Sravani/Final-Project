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

import com.axis.model.SupportTeam;
import com.axis.service.SupportTeamService;



@CrossOrigin(origins="")
@RestController
@RequestMapping("api/v1")
public class SupportTeamController {
	
	@Autowired
	SupportTeamService supportTeamService;
	
	@PostMapping("/add")
	public ResponseEntity<SupportTeam> addSupport(@RequestBody SupportTeam support){
		SupportTeam sprt2=supportTeamService.addSupport(support);
		return new ResponseEntity<SupportTeam>(support, HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<SupportTeam>> getAll(){
		List<SupportTeam> sprt2=supportTeamService.getAllSupportTeam();
		return new ResponseEntity<List<SupportTeam>>(sprt2, HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<SupportTeam> getSupportById(@PathVariable String id){
		SupportTeam sprt2=supportTeamService.getSupportById(id);
		return new ResponseEntity<SupportTeam>(sprt2, HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<SupportTeam> updateSupport(@PathVariable String id,@RequestBody SupportTeam support){
		return new ResponseEntity<SupportTeam>(supportTeamService.updateSupport(id, support),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteSupport(@PathVariable String id){
		return new ResponseEntity<String>(supportTeamService.deleteSupport(id),HttpStatus.OK);
	}
	
	

}
