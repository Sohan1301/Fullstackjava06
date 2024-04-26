package com.vishu.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vishu.model.CustomerModel;

@Repository
public interface CustomerRepo extends CrudRepository<CustomerModel, Integer> {

}
