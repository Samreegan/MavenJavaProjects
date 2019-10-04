var mongoose = require('mongoose');

var PropertyDetailsSchema = new mongoose.Schema({
	address1 : String,
	location : String,
	city : String,
	state : String,
	pinCode : Number,
	latitude : Number,
	longitude : Number,
	price : String,
	furnished : String,
	airConditionerAvailable : String,
	squareFeet : Number,
	propertyType: String,
	associationFee : String,
	parkingSpace : String,
	age : Number,
	propertyDescription : String,
	attachedBathroomNum : Number,
	outsideBathroomNum : Number,
	bedroomCount : Number,
	floorType : String,
	otherInteriorDetail : String,
	waterSewerDetail : String,
	builderDetail : String,
	modelDesignDetail : String,
	amenities : String,
	indoorGameDetail : String,
	outdoorGameDetail : String,
	otherAmenitiesDetail : String,
	otherLocationDetail : String,	
	dateCreated:{type:Date, default: Date.now}//
},{collection:"PropertyDetails"});

PropertyDetails = mongoose.model('PropertyDetails',PropertyDetailsSchema);
module.exports = PropertyDetails;