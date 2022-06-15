package com.saini.aditi.controller.model;

import lombok.Data;

@Data
public class Employee {
	private long id;
	private int age;
	private String firstName;
	private String lastName;
	private String address;
	private String email;
	
	public Employee(long id, int age, String firstName, String lastName, String address, String email) {
		this.id = id;
		this.age = age;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.email = email;
	}
	
	
}
