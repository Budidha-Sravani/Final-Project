package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.axis.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,String> {
	public Employee findByEmployeeId(String employeeId);
	public Employee findByUserNameAndPassword(String userName,String password);
}
