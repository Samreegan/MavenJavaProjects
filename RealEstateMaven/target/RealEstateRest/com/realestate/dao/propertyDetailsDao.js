var mongoose = require('mongoose');
var fs = require('fs');
var PropertyDetails = require('../model/propertyDetails');
module.exports.controller = function(app) {

app.post("/propertyDetails",function(req,res){
	var prop = req.body;
	console.log(prop);
	var propertyDetails = new PropertyDetails(prop);
	propertyDetails.save();
});
app.get("/propertyDetails",function(req,res){
	PropertyDetails.find(function (err, data){
		//console.log("data get:"+data);
		res.json(data);
		
	});

});
app.post("/propertyDetails/uploadPhotos", function(req, res) {

	//fs.readFile(req.files.image, function (err, data) {

		var imageName = req.file;
		console.log("************"+imageName);
	//});
});
app.delete('/propertyDetails/:id',function(req,res){
	console.log("************");
	PropertyDetails.remove({_id:req.params.id},function (err, count){
		console.log(err);
        console.log(count);
//		Form.find(function (err,data){
//			res.json(data);
//		});
	});
});
};

