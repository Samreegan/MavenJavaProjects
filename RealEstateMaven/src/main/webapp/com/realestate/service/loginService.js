RealEstateApp.factory("UserService",[function(){
	var currentUser = null;
	var users = [
	             {username:"Sam", password:"Sam", role: "student"},
	             {username:"Lazar", password:"Lazar", role: "teacher", teaching:[1,2,3], authoring:[2,3,5]},
	             {username:"Reegan", password:"Reegan", role :"student",registered:[1,2,4,5]}
	];
	var logout = function(){
		currentUser = null;
	};
	var login = function(username, password){
		for(var u in users){
			if(users[u].username == username
					&& users[u].password == password){
				currentUser = users[u];
				return users[u];
				
			}
		}
		return null;
	};
	var getCurrentUser = function(){
		return currentUser;
	};
	return{
		login:login,
		logout:logout,
		getCurrentUser:getCurrentUser
	};
}]);