var app = angular.module('propertyDetailsApp',[]);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    };
}]);

app.controller('FileUploadController', ['$scope', 'fileUpload', function($scope, fileUpload){
	//fileName = "/Users/hannasam/Pictures/Pictures/bgl_apt/IMG_20140125_161235.jpg";
	$scope.fileNames = [];
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        var fileName = "/Users/hannasam/Pictures/Pictures/bgl_apt/"+file.name;
        $scope.fileNames.push(fileName);
        console.log('file is ' );
        console.dir(file);
        console.log($scope.fileNames);
       // var uploadUrl = "/fileUpload";
       // fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);
