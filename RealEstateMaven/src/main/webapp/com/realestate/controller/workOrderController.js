RealEstateApp.controller('WorkOrderController',['$scope','WorkOrderService', 
                                                      function($scope,WorkOrderService) {
	console.log("***WorkOrderController***");
	$scope.workOrderList = WorkOrderService.workOrderList;
	WorkOrderService.getWorkOrderList();
	
	$scope.saveWorkOrder = function(){
		WorkOrderService.saveWorkOrder($scope.workOrder);
		WorkOrderService.getWorkOrderList();
	};
	   
	  
}]);