package com.saini.aditi.dao;

import java.util.ArrayList;
import java.util.List;

import com.saini.aditi.controller.model.Employee;

public class PopulateData {

	private static List<Employee> employeeList = new ArrayList<Employee>();
	static {
		employeeList.add(new Employee((long)111, 22, "Aditi1", "Saini", "Dehradun1", "aditi1.saini@gmail.com"));
		employeeList.add(new Employee((long)112, 23, "Aditi2", "Saini", "Dehradun2", "aditi2.saini@gmail.com"));
		employeeList.add(new Employee((long)113, 24, "Aditi3", "Saini", "Dehradun3", "aditi3.saini@gmail.com"));
		employeeList.add(new Employee((long)114, 25, "Aditi4", "Saini", "Dehradun4", "aditi4.saini@gmail.com"));
		employeeList.add(new Employee((long)115, 26, "Aditi5", "Saini", "Dehradun5", "aditi5.saini@gmail.com"));
		employeeList.add(new Employee((long)116, 27, "Aditi6", "Saini", "Dehradun6", "aditi6.saini@gmail.com"));
		employeeList.add(new Employee((long)117, 28, "Aditi7", "Saini", "Dehradun7", "aditi7.saini@gmail.com"));
		employeeList.add(new Employee((long)118, 29, "Aditi8", "Saini", "Dehradun8", "aditi8.saini@gmail.com"));
	}
	
	public static List<Employee> getData() {
		return employeeList;
	}
	
}
