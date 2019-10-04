RealEstateApp.controller('LoginController',['$scope', 'UserService',function($scope, UserService) {
	$scope.currentUser = null;
	 $scope.logout=function(){
		 $scope.currentUser = null;
	     UserService.logout();
	     $scope.username=null;
	     $scope.password=null;
	    } ;
    $scope.login=function(){
    	var username = $scope.username;
    	var password = $scope.password;
    	console.log([username, password]);
    	$scope.currentUser = UserService.login(username,password);
    };
    
}]);


