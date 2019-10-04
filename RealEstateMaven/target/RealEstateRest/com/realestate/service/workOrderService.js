RealEstateApp.factory("WorkOrderService",['$http',function($http){
	
	var workOrderList = [];
	
	var getWorkOrderList = function(){
		console.log("***WorkOrderService***>>>");
		$http.get("/workOrder").success(function(response){
			console.log("***WorkOrderService***>>>1"+response);
			angular.copy(response, workOrderList);
		});
		
	};
	
	var saveWorkOrder=function(workOrder){
		console.log("***WorkOrderService saveWorkOrder***");
		$http.post("/workOrder", workOrder)
		.success(function(response){console.log("saveWorkOrder success")});
     };
	
	return{
		getWorkOrderList:getWorkOrderList,
		saveWorkOrder:saveWorkOrder
	};
}]);