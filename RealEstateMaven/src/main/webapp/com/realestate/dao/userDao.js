var mongoose = require('mongoose');
var User = require('../model/user');
module.exports.controller = function(app) {

app.post("/user",function(req,res){
	var prop = req.body;
	console.log(prop);
	var user = new User(prop);
	user.save();
});
app.get("/user",function(req,res){
	User.find(function (err, data){
		//console.log("data get:LoginDao"+data);
		res.json(data);
		
	});

});

app.get("/user/:userName/:password",function(req,res){
	User.findOne({'userName':req.params.userName,'password':req.params.password},function (err, data){
		console.log("data get by usr and password:LoginDao"+data);
		res.json(data);
		
	});

});

app.post('/userByUserNameAndPwd',function(req,res){
	var user = req.body;
	//var password = req.params.user.password;
	console.log("***LoginDao req.params.useraaaa***"+user.userName);
	console.log("***LoginDao req.params.userpp***"+user.password);
	User.find({ 'userName': user.userName, 'password' : user.password }, function (err, data) {
		if (err) {
			return handleError(err);
		}
		console.log(data);
		console.log("***LoginDaoaaaa***"+data);
		res.json(data);
	});
});

};

