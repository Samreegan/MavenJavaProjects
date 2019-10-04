package com.realestate.service;

import com.realestate.dao.UserDao;
import com.realestate.model.User;

public class UserService {
	
	public boolean isAdminUser(String userName, String password){
		boolean isAdmin = false;
		UserDao userDao = new UserDao();
		User user = userDao.getUserByUserNameAndPwd(userName, password);
		if(user!=null && user.getRole()!=null && user.getRole().equalsIgnoreCase("admin")){
			isAdmin = true;
		}
		return isAdmin;
	}
	
	public User getUser(User user){
		UserDao userDao = new UserDao();
		User currentUser = userDao.getUserByUserNameAndPwd(user.getUserName(),user.getPassword());
		return currentUser;
	}

}
