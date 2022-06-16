package com.saini.aditi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saini.aditi.controller.model.Employee;
import com.saini.aditi.controller.service.impl.CrudServiceImpl;
import com.saini.aditi.exception.EmployeeNotFoundException;

@RestController
@CrossOrigin("http://127.0.0.1:5500")
@RequestMapping(value = "/v1/")
public class MyCrudController {
	
	@Autowired
	CrudServiceImpl crudServiceImpl;
	
	@GetMapping(value = "getEmployees")
	public List<Employee> getEmployees() {
		return crudServiceImpl.getEmployees();
	}
	
	@GetMapping(value = "getEmployee/{id}")
	public Employee getEmployee(@PathVariable long id) throws Exception{
		return crudServiceImpl.getEmployee(id);
	}
	
	@PutMapping(value = "updateEmployee")
	public Employee updateEmployee(@RequestBody Employee employee) throws EmployeeNotFoundException {
		if(employee == null) {
			throw new EmployeeNotFoundException("");
		}else if(employee.getId() == 0) {
			return crudServiceImpl.addEmployee(employee);
		}else {
			System.out.println(employee.toString());
			return crudServiceImpl.updateEmployee(employee);
		}
	}
	
	@DeleteMapping(value = "deleteEmployee/{id}")
	public long deleteEmployee(@PathVariable long id) throws EmployeeNotFoundException {
		return crudServiceImpl.deleteEmployee(id);
	}
}
