var RealEstateApp = angular.module("RealEstateApp",['ngRoute','naif.base64']);

RealEstateApp.config(['$routeProvider', 
  function($routeProvider){
	$routeProvider.
    when('/home', {
      templateUrl: 'pages/home.html'
    }).
    when('/workOrder', {
        templateUrl: 'pages/workOrder.html'
    }).
    when('/photoSelection', {
        templateUrl: 'pages/photoSelection.html'
      }).
      when('/sellRent', {
          templateUrl: 'pages/propertyDetail.html'
        }).
      when('/propetyDetailInfo', {
          templateUrl: 'pages/listPropertyDetail.html'
        }).
    when('/about', {
        templateUrl: 'pages/about.html'
      }).
	when('/contact', {
	      templateUrl: 'pages/contact.html'
	  }).
    when('/profile/:username', {
      templateUrl: 'pages/profile.html',
      controller: 'ProfileController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);