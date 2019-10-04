package com.realestate.dao;

import java.util.ArrayList;
import java.util.List;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.realestate.db.DBConnection;
import com.realestate.model.User;

public class UserDao {
	
	public User getUserByUserNameAndPwd(String userName, String password){
		
		DBConnection dbConnection = new DBConnection();
		DB db = dbConnection.getConnection();
		DBCollection collection = db.getCollection("User");
		
		BasicDBObject andQuery = new BasicDBObject();
		List<BasicDBObject> obj = new ArrayList<BasicDBObject>();
		obj.add(new BasicDBObject("userName", userName));
		obj.add(new BasicDBObject("password", password));
		andQuery.put("$and", obj);

		System.out.println(andQuery.toString());
		User user = null;
		DBCursor cursor = collection.find(andQuery);
		while (cursor.hasNext()) {
			user = new User();
			//System.out.println(cursor.next());
			DBObject dbObject = cursor.next();
			BasicDBObject basicDBObject = (BasicDBObject) dbObject;
			user.setFirstName(basicDBObject.getString("firstName"));
			user.setLastName(basicDBObject.getString("lastName"));
			user.setEmail(basicDBObject.getString("email"));
			user.setPassword(basicDBObject.getString("password"));
			user.setRole(basicDBObject.getString("role"));
			user.setDateCreated(basicDBObject.getDate("dateCreated"));
			user.setCreatedBy(basicDBObject.getString("createdBy"));
			user.setDateModified(basicDBObject.getDate("dateModified"));
			user.setModifiedBy(basicDBObject.getString("modifiedBy"));
		}
		return user;
	}
	
	public static void main(String s[]){
		UserDao userDao = new UserDao();
		System.out.println(userDao.getUserByUserNameAndPwd("admin", "admin").toString());
	}
	

}
