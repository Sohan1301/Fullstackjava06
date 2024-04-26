package com.vishu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vishu.model.CustomerModel;
import com.vishu.repo.CustomerRepo;
@Service
public class CustomerServices implements CustomerService {
	@Autowired
	private CustomerRepo repo;
	@Override
	public CustomerModel saveCust(CustomerModel cust) {
		double t=0.0,d=0.0,g=0.0,b=0.0;
		t=cust.getPc()*cust.getQua();
		if(t<2500)
		{
			d=(t*10)/100;
		}
		else if (t<2500&&t>5000) {
			d=(t*15)/100;
		}
		else
		{
			d=(t*25)/100;
		}
		g=1000.00;
		b=(t-d)+g;
		cust.setTotal(t);
		cust.setDiscount(d);
		cust.setGst(g);
		cust.setBill(b);
		
		return repo.save(cust);
	}

	@Override
	public List<CustomerModel> viewCust() {
		List<CustomerModel>listcust=(List<CustomerModel>)repo.findAll();
		
		return listcust;
	}

	@Override
	public void deleteCust(Integer cid) {
		repo.deleteById(cid);

	}

	@Override
	public CustomerModel updateCust(Integer cid) {
		// TODO Auto-generated method stub
		return null;
	}

}
