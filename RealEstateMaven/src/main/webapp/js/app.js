var app = angular.module("FormApp",[]);

app.controller("FormController",
  function($scope, $http){
	//$scope.hello = "Hello World";
	$http.get("/api/form")
	.success(function (response){
		$scope.forms=response;
	});
	$scope.remove = function(id){
		//alert(id);
		$http.delete("/api/form/"+id)
		.success(function (response){
			$scope.forms = response;
		});
		
	}
});