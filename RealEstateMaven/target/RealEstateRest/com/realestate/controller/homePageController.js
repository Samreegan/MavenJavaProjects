RealEstateApp.controller('HomePageController',['$scope', '$location' , function($scope,$location) {
	$scope.goNext = function (path) { 
		$location.path(path);
	};
}]);