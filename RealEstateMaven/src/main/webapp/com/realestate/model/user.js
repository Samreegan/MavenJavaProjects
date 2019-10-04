var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstName : String,
	lastName : String,
	email : String,
	userName : String,
	password : String,
	role : String,
	dateCreated:{type:Date, default: Date.now},//
	createdBy:String,
	dateModified:{type:Date, default: Date.now},//
	modifiedBy:String
},{collection:"User"});

User = mongoose.model('User',UserSchema);
module.exports = User;