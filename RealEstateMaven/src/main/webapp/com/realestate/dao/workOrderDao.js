var mongoose = require('mongoose');
var WorkOrder = require('../model/workOrder');
module.exports.controller = function(app) {

app.post("/workOrder",function(req,res){
	var workOrderJson = req.body;
	console.log(workOrderJson);
	var workOrder = new WorkOrder(workOrderJson);
	workOrder.save();
});
app.get("/workOrder",function(req,res){
	WorkOrder.find(function (err, data){
		console.log("data get:WorkOrderDao"+data);
		res.json(data);
		
	});

});

};

