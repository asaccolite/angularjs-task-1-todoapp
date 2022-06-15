package com.saini.aditi.controller.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.saini.aditi.controller.model.Employee;
import com.saini.aditi.controller.service.CrudService;
import com.saini.aditi.dao.PopulateData;
import com.saini.aditi.exception.EmployeeNotFoundException;

@Service
public class CrudServiceImpl implements CrudService {

	@Override
	public List<Employee> getEmployees() {
		return PopulateData.getData();
	}

	@Override
	public Employee getEmployee(long id) throws Exception{
		Optional<Employee> employee = PopulateData.getData()
						.stream().filter(e -> e.getId() == id)
						.findFirst();
		if (employee.isPresent()) {
			return employee.get();
		}
		throw new EmployeeNotFoundException("No Employee found with id " + id + ". Please check");
	}

	@Override
	public Employee updateEmployee(Employee employee) throws EmployeeNotFoundException{
		List<Employee> employeeList = PopulateData.getData();
		Optional<Employee> empObject = employeeList.stream()
					.filter(e -> e.getId() == employee.getId())
					.findFirst();
		if(empObject.isPresent()) {
			empObject.get().setAge(employee.getAge());
			empObject.get().setFirstName(employee.getFirstName());
			empObject.get().setLastName(employee.getLastName());
			empObject.get().setAddress(employee.getAddress());
			empObject.get().setEmail(employee.getEmail());
			return empObject.get();
		}
		throw new EmployeeNotFoundException("No Employee found with id " + employee.getId() + ". Please check");

	}

	@Override
	public long deleteEmployee(long id) {
		return (long)1;

	}

}
