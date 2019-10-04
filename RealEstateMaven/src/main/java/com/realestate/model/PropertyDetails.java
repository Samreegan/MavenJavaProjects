package com.realestate.model;

import java.util.Date;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.map.annotate.JsonSerialize;

import com.realestate.util.JsonDateSerializer;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PropertyDetails {
	
	private String id;
	private String address1;
	private String location;
	private String city;
	private String state;
	private Integer pinCode;
	private Integer latitude;
	private Integer longitude;
	private String price;
	private String furnished;
	private String airConditionerAvailable;
	private Integer squareFeet;
	private String propertyType;
	private String associationFee;
	private String parkingSpace;
	private Integer age;
	private String propertyDescription;
	private Integer attachedBathroomNum;
	private Integer outsideBathroomNum;
	private Integer bedroomCount;
	private String floorType;
	private String otherInteriorDetail;
	private String waterSewerDetail;
	private String builderDetail;
	private String modelDesignDetail;
	private String amenities;
	private String indoorGameDetail;
	private String outdoorGameDetail;
	private String otherAmenitiesDetail;
	private String otherLocationDetail;	
	private Date dateCreated;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Integer getPinCode() {
		return pinCode;
	}
	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}
	public Integer getLatitude() {
		return latitude;
	}
	public void setLatitude(Integer latitude) {
		this.latitude = latitude;
	}
	public Integer getLongitude() {
		return longitude;
	}
	public void setLongitude(Integer longitude) {
		this.longitude = longitude;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getFurnished() {
		return furnished;
	}
	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}
	public String getAirConditionerAvailable() {
		return airConditionerAvailable;
	}
	public void setAirConditionerAvailable(String airConditionerAvailable) {
		this.airConditionerAvailable = airConditionerAvailable;
	}
	public Integer getSquareFeet() {
		return squareFeet;
	}
	public void setSquareFeet(Integer squareFeet) {
		this.squareFeet = squareFeet;
	}
	public String getPropertyType() {
		return propertyType;
	}
	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}
	public String getAssociationFee() {
		return associationFee;
	}
	public void setAssociationFee(String associationFee) {
		this.associationFee = associationFee;
	}
	public String getParkingSpace() {
		return parkingSpace;
	}
	public void setParkingSpace(String parkingSpace) {
		this.parkingSpace = parkingSpace;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getPropertyDescription() {
		return propertyDescription;
	}
	public void setPropertyDescription(String propertyDescription) {
		this.propertyDescription = propertyDescription;
	}
	public Integer getAttachedBathroomNum() {
		return attachedBathroomNum;
	}
	public void setAttachedBathroomNum(Integer attachedBathroomNum) {
		this.attachedBathroomNum = attachedBathroomNum;
	}
	public Integer getOutsideBathroomNum() {
		return outsideBathroomNum;
	}
	public void setOutsideBathroomNum(Integer outsideBathroomNum) {
		this.outsideBathroomNum = outsideBathroomNum;
	}
	public Integer getBedroomCount() {
		return bedroomCount;
	}
	public void setBedroomCount(Integer bedroomCount) {
		this.bedroomCount = bedroomCount;
	}
	public String getFloorType() {
		return floorType;
	}
	public void setFloorType(String floorType) {
		this.floorType = floorType;
	}
	public String getOtherInteriorDetail() {
		return otherInteriorDetail;
	}
	public void setOtherInteriorDetail(String otherInteriorDetail) {
		this.otherInteriorDetail = otherInteriorDetail;
	}
	public String getWaterSewerDetail() {
		return waterSewerDetail;
	}
	public void setWaterSewerDetail(String waterSewerDetail) {
		this.waterSewerDetail = waterSewerDetail;
	}
	public String getBuilderDetail() {
		return builderDetail;
	}
	public void setBuilderDetail(String builderDetail) {
		this.builderDetail = builderDetail;
	}
	public String getModelDesignDetail() {
		return modelDesignDetail;
	}
	public void setModelDesignDetail(String modelDesignDetail) {
		this.modelDesignDetail = modelDesignDetail;
	}
	public String getAmenities() {
		return amenities;
	}
	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}
	public String getIndoorGameDetail() {
		return indoorGameDetail;
	}
	public void setIndoorGameDetail(String indoorGameDetail) {
		this.indoorGameDetail = indoorGameDetail;
	}
	public String getOutdoorGameDetail() {
		return outdoorGameDetail;
	}
	public void setOutdoorGameDetail(String outdoorGameDetail) {
		this.outdoorGameDetail = outdoorGameDetail;
	}
	public String getOtherAmenitiesDetail() {
		return otherAmenitiesDetail;
	}
	public void setOtherAmenitiesDetail(String otherAmenitiesDetail) {
		this.otherAmenitiesDetail = otherAmenitiesDetail;
	}
	public String getOtherLocationDetail() {
		return otherLocationDetail;
	}
	public void setOtherLocationDetail(String otherLocationDetail) {
		this.otherLocationDetail = otherLocationDetail;
	}
	
	@JsonSerialize(using=JsonDateSerializer.class)
	public Date getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	@Override
	public String toString() {
		return "PropertyDetails [id=" + id + ", address1=" + address1
				+ ", location=" + location + ", city=" + city + ", state="
				+ state + ", pinCode=" + pinCode + ", latitude=" + latitude
				+ ", longitude=" + longitude + ", price=" + price
				+ ", furnished=" + furnished + ", airConditionerAvailable="
				+ airConditionerAvailable + ", squareFeet=" + squareFeet
				+ ", propertyType=" + propertyType + ", associationFee="
				+ associationFee + ", parkingSpace=" + parkingSpace + ", age="
				+ age + ", propertyDescription=" + propertyDescription
				+ ", attachedBathroomNum=" + attachedBathroomNum
				+ ", outsideBathroomNum=" + outsideBathroomNum
				+ ", bedroomCount=" + bedroomCount + ", floorType=" + floorType
				+ ", otherInteriorDetail=" + otherInteriorDetail
				+ ", waterSewerDetail=" + waterSewerDetail + ", builderDetail="
				+ builderDetail + ", modelDesignDetail=" + modelDesignDetail
				+ ", amenities=" + amenities + ", indoorGameDetail="
				+ indoorGameDetail + ", outdoorGameDetail=" + outdoorGameDetail
				+ ", otherAmenitiesDetail=" + otherAmenitiesDetail
				+ ", otherLocationDetail=" + otherLocationDetail
				+ ", dateCreated=" + dateCreated + "]";
	}
	
	

}
