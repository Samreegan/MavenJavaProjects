RealEstateApp.controller('PropertyDetailsController',['$scope','$location','PropertyDetailsService','FileUploadService', 
                                                      function($scope,$location,PropertyDetailsService,FileUploadService) {
	console.log("***PropertyDetailsController***");
	
	$scope.propertyDetails = PropertyDetailsService.propertyDetails;
	PropertyDetailsService.getPropertyDetailsList();
	$scope.showDetail = false;
	
	$scope.showPropertyDetail= function(propertyDetail){
		$scope.showDetail = true;
		$scope.propertyDetail = propertyDetail;
	};
	
	$scope.savePropertyDetails = function(){
		 PropertyDetailsService.savePropertyDetails($scope.propertydetail);
		 PropertyDetailsService.getPropertyDetailsList();
		 var files = FileUploadService.files;
		 for(var i=0; i<files.length;i++){
	    	  var file = files[i];
	    	  PropertyDetailsService.uploadPhotos(file);
			 
		 }
		 $location.path("/propetyDetailInfo");
	};
	$scope.deletePropertyDetail = function(id){
		 PropertyDetailsService.deletePropertyDetail(id);
		 PropertyDetailsService.getPropertyDetailsList();
	}
	$scope.openPhotoSelection = function (path) { 
		$location.path(path);
	};
	   
	  
}]);