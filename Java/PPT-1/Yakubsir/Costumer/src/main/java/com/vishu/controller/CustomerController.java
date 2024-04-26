package com.vishu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vishu.model.CustomerModel;
import com.vishu.service.CustomerServices;

@Controller
public class CustomerController {
	@Autowired
	private CustomerServices services;
	@RequestMapping(value ="/")
	public String homeCust()
	{
		return "home";
	}
	@RequestMapping(value ="/addcust")
	public String formCust()
	{
		return "custform";
	}
	@RequestMapping(value ="/save")
	public String addCust(CustomerModel cust)
	{
		services.saveCust(cust);
		return "save";
	}
	@RequestMapping(value ="/viewcust")
	public String viewAllCust(ModelMap model)
	{
		model.put("cust1",services.viewCust());
		return "view";
	}
	@RequestMapping(value ="/delete/{cid}")
	public String deleteCust(@PathVariable Integer cid,ModelMap model)
	{
		services.deleteCust(cid);
		return "redirect:/viewcust";
	}


}
