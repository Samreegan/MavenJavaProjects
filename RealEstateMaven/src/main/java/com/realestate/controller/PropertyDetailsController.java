package com.realestate.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.realestate.dao.PropertyDetailsDao;
import com.realestate.model.PropertyDetails;


@Path("/propertyDetails")
public class PropertyDetailsController {
	
	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public List<PropertyDetails> getPropertyDetailList() {
		PropertyDetailsDao propertyDetailsDao = new PropertyDetailsDao();
		return propertyDetailsDao.getPropertyDetailsList();
	}
	
	@POST
	@Path("/post")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<PropertyDetails> getCountryById(PropertyDetails propertyDetails) {
		PropertyDetailsDao propertyDetailsDao = new PropertyDetailsDao();
		try{
			ObjectMapper mapper = new ObjectMapper();
			propertyDetails.setDateCreated(new Date());
			propertyDetailsDao.savePropertyDetails(propertyDetails);
			String jsonInString = mapper.writeValueAsString(propertyDetails);
			System.out.println(jsonInString);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return propertyDetailsDao.getPropertyDetailsList();
	}

}
