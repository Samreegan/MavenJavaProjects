angular.module('propertyDetailsApp').controller('PropertyDetailsController', function($scope,$http) {
	console.log("***PropertyDetailsController---***");
	$scope.showPropertyDetail= function(propertyDetail){
		$scope.showDetail = true;
		$scope.propertyDetail = propertyDetail;
		
		
	};
	 $scope.save=function(){
		 $scope.tab = 4;
		 active:tab==4;
		 buildAmenities();
		 $http.post("/propertyDetails",$scope.propertydetail)
		 .success(function(response){console.log("hello")});
	   } ;
	    $scope.renderPropertySellBuyList = function(response){
	    	$scope.showDetail = false;
	    	$scope.propertyDetails = response;
	    };
	    
	    $http.get("/propertyDetails").success($scope.renderPropertySellBuyList);
	    
	     var buildAmenities = function(){
	    	//alert("hi")
	    	 $scope.propertydetail.amenities =undefined;
	    	if($scope.propertydetail.gymAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Gym"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Gym";
				 }
				 
			 }
	    	if($scope.propertydetail.swimmingPoolAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Swimming pool"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Swimming pool";
				 }
				 
			 }
	    	if($scope.propertydetail.kidsPlayAreaAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Kids Play area"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Kids Play area";
				 }
				 
			 }
	    	if($scope.propertydetail.communityHallAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Community Hall"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Community Hall";
				 }
				 
			 }
	    	if($scope.propertydetail.indoorGamesAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Indoor Games"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Indoor Games";
				 }
				 
			 }
	    	if($scope.propertydetail.outdoorGamesAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Outdoor Games"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Outdoor Games";
				 }
				 
			 }
	    	if($scope.propertydetail.powerBackupAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Power Backup"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Power Backup";
				 }
				 
			 }
	    	if($scope.propertydetail.elevatorAvailable){
				
				 if(angular.isUndefined( $scope.propertydetail.amenities)){
					 	$scope.propertydetail.amenities = "Elevator"; 
				 }else{
					 $scope.propertydetail.amenities = $scope.propertydetail.amenities+",Elevator";
				 }
				 
			 }

	    };
});