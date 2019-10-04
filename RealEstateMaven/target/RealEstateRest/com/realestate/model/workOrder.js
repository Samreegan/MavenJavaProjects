var mongoose = require('mongoose');

var WorkOrderSchema = new mongoose.Schema({
	firstName : String,
	lastName : String,
	email : String,
	phoneNumber : Number,
	address1 : String,
	location : String,
	city : String,
	state : String,
	pinCode : Number,
	dateCreated:{type:Date, default: Date.now},//
	createdBy:String,
	dateModified:{type:Date, default: Date.now},//
	modifiedBy:String
},{collection:"WorkOrder"});

var WorkOrder = mongoose.model('WorkOrder',WorkOrderSchema);
module.exports = WorkOrder;