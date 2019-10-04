RealEstateApp.controller('LoginUserController',['$scope', 'LoginUserService' , function($scope,LoginUserService) {
	console.log("***UserController***");
	 $scope.logout=function(){
		 $scope.currentUser = null;
		 LoginUserService.logout();
	     $scope.user.userName=null;
	     $scope.user.password=null;
	     $scope.isAdmin = false;
	    } 
   $scope.login=function(){
	   	var user = $scope.user;
	   	console.log("---"+user);
	   	console.log([$scope.user.userName, $scope.user.password]);
	    var loginres = LoginUserService.login(user);
	    loginres.then(function(result) {
		
	   		$scope.isAdmin = result.data;
	   		console.log("is admin"+$scope.isAdmin);
	    });
	    var getUserRes = LoginUserService.getUser(user);
	    getUserRes.then(function(result) {
			
			$scope.currentUser = result.data;
	   		console.log("currentUser"+$scope.currentUser);
	    });
		
		
	   	console.log("***UserController***"+$scope.currentUser+"-"+$scope.isAdmin );
   };
   
	
	/* $scope.save=function(){
		 $http.post("/user",$scope.user)
		 .success(function(response){console.log("hello")});
	   } ;
	    $scope.renderUser = function(response){
	    	console.log("***UserController renderUser***");
	    	$scope.showDetail = false;
	    	$scope.propertyDetails = response;
	    };
	    
	    $http.get("/user").success($scope.renderUser);
	    
	    $scope.getUserByUserNameAndPwd = function(userName){
			//alert(id);
			$http.get("/user/"+userName)
			.success(function (response){
				$scope.user = response;
				console.log("user : "+response)
			});
			
		};*/
}]);