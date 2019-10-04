RealEstateApp.factory("PropertyDetailsService",['$http',function($http){
	
	var propertyDetails = [];
	
	var savePropertyDetails=function(propertydetail){
		console.log("***PropertyDetailsController savePropertyDetails***");
		buildAmenities(propertydetail);
		$http.post("http://localhost:8080/RealEstateRest/rest/propertyDetails/post", propertydetail)
		.success(function(response){console.log("savePropertyDetails success")});
     };
     var deletePropertyDetail=function(id){
 		console.log("***PropertyDetailsController deletePropertyDetail***");
// 		$http.delete("/api/form/"+id)
//		.success(function (response){
//			$scope.forms = response;
//		});
 		
 		$http.delete("/propertyDetails/"+id)
 		.success(function(response){console.log("savePropertyDetails success")});
      };
      
      var uploadPhotos = function(file){
          var fd = new FormData();
          fd.append('file', file);

          $http.post("/propertyDetails/uploadPhotos", fd, {
             transformRequest: angular.identity,
             headers: {'Content-Type': undefined}
          })

          .success(function(){
          })

          .error(function(){
          });
       };
     
     
	var getPropertyDetailsList = function(){
		console.log("***PropertyDetailsController getPropertyDetailsList***");
		//$http.get("/propertyDetails").success(function(response){
		$http.get('http://localhost:8080/RealEstateRest/rest/propertyDetails/get').success(function(data) {
			angular.copy(data, propertyDetails);
			console.log("*** getPropertyDetailsList***"+propertyDetails);
		});
		
	};
	
	
	var buildAmenities = function(propertydetail){
    	//alert("hi")
		propertydetail.dateCreated = new Date();
    	propertydetail.amenities =undefined;
    	if(propertydetail.gymAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Gym"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Gym";
			 }
			 
		 }
    	if(propertydetail.swimmingPoolAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Swimming pool"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Swimming pool";
			 }
			 
		 }
    	if(propertydetail.kidsPlayAreaAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Kids Play area"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Kids Play area";
			 }
			 
		 }
    	if(propertydetail.communityHallAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Community Hall"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Community Hall";
			 }
			 
		 }
    	if(propertydetail.indoorGamesAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Indoor Games"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Indoor Games";
			 }
			 
		 }
    	if(propertydetail.outdoorGamesAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Outdoor Games"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Outdoor Games";
			 }
			 
		 }
    	if(propertydetail.powerBackupAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Power Backup"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Power Backup";
			 }
			 
		 }
    	if(propertydetail.elevatorAvailable){
			
			 if(angular.isUndefined( propertydetail.amenities)){
				 	propertydetail.amenities = "Elevator"; 
			 }else{
				 propertydetail.amenities = propertydetail.amenities+",Elevator";
			 }
			 
		 }
    	

    };
    
    return{
    	propertyDetails:propertyDetails,
		getPropertyDetailsList:getPropertyDetailsList,
		savePropertyDetails:savePropertyDetails,
		deletePropertyDetail:deletePropertyDetail,
		uploadPhotos:uploadPhotos
	};
	
}]);
