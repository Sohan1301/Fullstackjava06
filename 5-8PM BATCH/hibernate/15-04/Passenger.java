package com.chanti;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="passengers")
public class Passenger implements Serializable{
	@Id
	@Column(name="passenger_id")
	private int id;
	@Column(name="passenger_name")
	private String name;
	@Column(name="passenger_phone_number")
	private long phone;
	@Column(name="passenger_city")
	private String city;
	public Passenger() {
		// TODO Auto-generated constructor stub
	}
	public Passenger(int id, String name, long phone, String city) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.city = city;
	}
	@Override
	public String toString() {
		return "Passenger [id=" + id + ", name=" + name + ", phone=" + phone + ", city=" + city + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
}
