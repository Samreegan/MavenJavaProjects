RealEstateApp.controller('ProfileController', ['$scope', 'UserService', '$routeParams', 'CourseService',function($scope, UserService, $routeParams, CourseService) {
	var username = $routeParams.username;
	$scope.username = username;
	
	$scope.currentUser = UserService.getCurrentUser();
	console.log($scope.currentUser.role);
	if($scope.currentUser.role == 'teacher'){
		console.log($scope.currentUser.authoring);
		console.log($scope.currentUser.teaching);
		$scope.authoring = CourseService.getCoursesByIds($scope.currentUser.authoring);
		$scope.teaching = CourseService.getCoursesByIds($scope.currentUser.teaching);
	}
}]);
