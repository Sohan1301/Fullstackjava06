package com.vishu.service;

import java.util.List;

import com.vishu.model.CustomerModel;

public interface CustomerService {
	public CustomerModel saveCust(CustomerModel cust);
	public List<CustomerModel> viewCust();
	public void deleteCust(Integer cid);
	public CustomerModel updateCust(Integer cid);

}
