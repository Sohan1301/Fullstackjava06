package com.chanti;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;

public class Test_Save2 
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
		//Creating persistence class object
		Passenger passenger=new Passenger(502,"Harish",98491L,"Mumbai");
		//Call the DAO methods to save the passenger object into Database
		session.save(passenger);
		System.out.println("Passenger Object saved successfully.....!!");
		//Commit the tx
		tx.commit();
		//Close the session and factory objects
		session.close();
		factory.close();
    }
}
