package com.chanti;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;

public class Test_ReadAll 
{
    public static void main( String[] args )
    {
    	//Loading configuration file into HB container
    	AnnotationConfiguration cfg = new AnnotationConfiguration();
		cfg.configure("com/chanti/MySQL.cfg.xml"); 
		//HB container creates high level object
		SessionFactory factory = cfg.buildSessionFactory();
		//Creating session between Java Application and Database
		Session session = factory.openSession();
		//Create a transaction
		Transaction tx = session.beginTransaction();
	
		Criteria criteria = session.createCriteria(Passenger.class);
		List<Passenger> list = criteria.list();
		for(Passenger passenger:list) {
			System.out.println(passenger);
		}
		
		//Commit the tx
		tx.commit();
		//Close the session and factory objects
		session.close();
		factory.close();
    }
}
