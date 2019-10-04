package com.realestate.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.realestate.model.User;
import com.realestate.service.UserService;

@Path("/user")
public class UserController {

	@POST
	@Path("/post")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public User getUser(User user) {
		UserService userService = new UserService();
		return userService.getUser(user);
	}
	
	@GET
	@Path("/isAdmin/{userName}/{password}")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean isAdminUser(
			@PathParam("userName") String userName,
			@PathParam("password") String password) {

	   UserService userService = new UserService();
	   return userService.isAdminUser(userName, password);
	}
	
	/*@GET
	@Path("{year}/{month}/{day}")
	public Response getUserHistory(
			@PathParam("year") int year,
			@PathParam("month") int month, 
			@PathParam("day") int day) {

	   String date = year + "/" + month + "/" + day;

	   return Response.status(200)
		.entity("getUserHistory is called, year/month/day : " + date)
		.build();

	}*/
	
}
