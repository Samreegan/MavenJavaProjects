RealEstateApp.factory("LoginUserService",['$http',function($http){
	var isAdmin = false;
	var currentUser = null;
	
	var logout = function(){
		currentUser = null;
	};
	
	
	var isAdminUser = function(){
		return isAdmin;
	}
		
	var login = function(user){
		console.log("***LoginUserService getUserList***");
		return $http.get("http://localhost:8080/RealEstateRest/rest/user/isAdmin/"+user.userName+"/"+user.password).then(function(response){
//			isAdmin = response;
			console.log("*** isAdmin***"+response);
			return response;
		});
	};
	
	var getUser = function(user){
		console.log("***LoginUserService getUserList***");
		return $http.post("http://localhost:8080/RealEstateRest/rest/user/post", user).then(function(response){
//			angular.copy(response, currentUser);
			console.log("*** currentUser***"+response);
			return response;
		});
	};
	
	return{
		login:login,
		logout:logout,
		getUser:getUser,
		currentUser:currentUser,
		isAdminUser:isAdminUser
	};
}]);