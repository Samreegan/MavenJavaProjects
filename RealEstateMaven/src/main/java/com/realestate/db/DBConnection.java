package com.realestate.db;

import java.net.UnknownHostException;

import com.mongodb.DB;
import com.mongodb.Mongo;
import com.mongodb.MongoException;

public class DBConnection {
	
	
	
	public DB getConnection(){
		DB db = null;
		 try {
				Mongo mongo = new Mongo("localhost", 27017);
				db = mongo.getDB("realestate");
		 } catch (UnknownHostException e) {
			 e.printStackTrace();
	    } catch (MongoException e) {
	    	 e.printStackTrace();
	    }
		 return db;
		
	}

}
