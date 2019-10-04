package com.realestate.dao;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import org.bson.types.ObjectId;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;
import com.realestate.db.DBConnection;
import com.realestate.model.PropertyDetails;

public class PropertyDetailsDao {
	
	public List<PropertyDetails> getPropertyDetailsList(){
		List<PropertyDetails> propertyDetailsList = new ArrayList<PropertyDetails>();
		DBConnection dbConnection = new DBConnection();
		DB db = dbConnection.getConnection();
		DBCollection collection = db.getCollection("PropertyDetails");
		
		DBCursor cursorDoc = collection.find();
		while (cursorDoc.hasNext()) {
			DBObject dbObject = cursorDoc.next();
			BasicDBObject basicDBObject = (BasicDBObject) dbObject;
            PropertyDetails propertyDetails = new PropertyDetails();
            propertyDetails.setId(((ObjectId) basicDBObject.get("_id")).toString());
            propertyDetails.setAddress1(basicDBObject.getString("address1"));
        	propertyDetails.setLocation(basicDBObject.getString("location"));
        	propertyDetails.setCity(basicDBObject.getString("city"));
        	propertyDetails.setState(basicDBObject.getString("state"));
        	propertyDetails.setPinCode(basicDBObject.getInt("pinCode"));
        	propertyDetails.setLatitude(basicDBObject.getInt("latitude"));
        	propertyDetails.setLongitude(basicDBObject.getInt("longitude"));
        	propertyDetails.setPrice(basicDBObject.getString("price"));
        	propertyDetails.setFurnished(basicDBObject.getString("furnished"));
        	propertyDetails.setAirConditionerAvailable(basicDBObject.getString("airConditionerAvailable"));
        	propertyDetails.setSquareFeet(basicDBObject.getInt("squareFeet"));
        	propertyDetails.setPropertyType(basicDBObject.getString("propertyType"));
        	propertyDetails.setAssociationFee(basicDBObject.getString("associationFee"));
        	propertyDetails.setParkingSpace(basicDBObject.getString("parkingSpace"));
        	propertyDetails.setAge(basicDBObject.getInt("age"));
        	propertyDetails.setPropertyDescription(basicDBObject.getString("propertyDescription"));
        	propertyDetails.setAttachedBathroomNum(basicDBObject.getInt("attachedBathroomNum"));
        	propertyDetails.setOutsideBathroomNum(basicDBObject.getInt("outsideBathroomNum"));
        	propertyDetails.setBedroomCount(basicDBObject.getInt("bedroomCount"));
        	propertyDetails.setFloorType(basicDBObject.getString("floorType"));
        	propertyDetails.setOtherInteriorDetail(basicDBObject.getString("otherInteriorDetail"));
        	propertyDetails.setWaterSewerDetail(basicDBObject.getString("waterSewerDetail"));
        	propertyDetails.setBuilderDetail(basicDBObject.getString("builderDetail"));
        	propertyDetails.setModelDesignDetail(basicDBObject.getString("modelDesignDetail"));
        	propertyDetails.setAmenities(basicDBObject.getString("amenities"));
        	propertyDetails.setIndoorGameDetail(basicDBObject.getString("indoorGameDetail"));
        	propertyDetails.setOutdoorGameDetail(basicDBObject.getString("outdoorGameDetail"));
        	propertyDetails.setOtherAmenitiesDetail(basicDBObject.getString("otherAmenitiesDetail"));
        	propertyDetails.setOtherLocationDetail(basicDBObject.getString("otherLocationDetail"));	
        	try{
        		propertyDetails.setDateCreated(basicDBObject.getDate("dateCreated"));
        	}catch(ClassCastException e){
        		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        		try{
        		propertyDetails.setDateCreated(dateFormat.parse(basicDBObject.getString("dateCreated")));
        		}catch(Exception ex){
        			ex.printStackTrace();
        		}
        	}
        	propertyDetailsList.add(propertyDetails);
		}
		
		return propertyDetailsList;
	}
	
	public void savePropertyDetails(PropertyDetails propertyDetails){
		
		DBConnection dbConnection = new DBConnection();
		DB db = dbConnection.getConnection();
		DBCollection collection = db.getCollection("PropertyDetails");
		ObjectMapper mapper = new ObjectMapper();
		String jsonPropertyDetails = "";
		propertyDetails.setDateCreated(new Date());
		System.out.println("Date Created :"+propertyDetails.getDateCreated());
		try{
			 jsonPropertyDetails = mapper.writeValueAsString(propertyDetails);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		
		DBObject propertyDetailsObject = (DBObject)JSON.parse(jsonPropertyDetails);
		collection.insert(propertyDetailsObject);
		
		//return true;
	}
	
	public static void main(String a[]){
		PropertyDetailsDao p = new PropertyDetailsDao();
		//System.out.println(p.getPropertyDetailsList().toString());
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
		TimeZone tz = TimeZone.getTimeZone("UTC");
		dateFormat.setTimeZone(tz);
		String nowAsISO = dateFormat.format(new Date());
		
		System.out.println(nowAsISO);
	}

}
