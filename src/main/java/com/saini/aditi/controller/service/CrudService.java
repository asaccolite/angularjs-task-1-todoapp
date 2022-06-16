package com.saini.aditi.controller.service;

import java.util.List;

import com.saini.aditi.controller.model.Employee;
import com.saini.aditi.exception.EmployeeNotFoundException;

public interface CrudService {
	public List<Employee> getEmployees();
	public Employee getEmployee(long id) throws Exception;
	public Employee updateEmployee(Employee employee) throws EmployeeNotFoundException;
	public Employee addEmployee(Employee employee) throws EmployeeNotFoundException;
	public long deleteEmployee(long id);
}
