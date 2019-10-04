//RealEstateApp.directive('fileModel', ['$parse', function ($parse) {
//    return {
//        restrict: 'A',
//        link: function(scope, element, attrs) {
//            var model = $parse(attrs.fileModel);
//            var modelSetter = model.assign;
//            
//            element.bind('change', function(){
//                scope.$apply(function(){
//                    modelSetter(scope, element[0].files[0]);
//                });
//            });
//        }
//    };
//}]);

/*RealEstateApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            element.bind('change', function () {
            	console.log('Please values!aa'+element[0].files);
                var values = [];
                angular.forEach(element[0].files, function (item) {
                	
                	var reader = new FileReader();
                	
                    reader.onload = function(e) {
                    	item.imgUri = e.target.result;
                    	
                      };
                    reader.readAsDataURL(item);
                  
                    var value = {
                       // File Name 
                        name: item.name,
                        //File Size 
                        size: item.size,
                        //File URL to view 
                        url: URL.createObjectURL(item),
                        // File Input Value 
                       imgUri : item.imgUri,
                       // File Input Value 
                        _file: item
                    };
                    //console.log('Please v'+item.ttt);
                  //  var deferred = $parse.defer();
                    
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) {
                        modelSetter(scope, values);
                    } else {
                        modelSetter(scope, values[0]);
                    }
                });
            });
        }
    };
}]);*/

/*RealEstateApp.directive('appFilereader', function($q) {
    
    var slice = Array.prototype.slice;

    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        if (!ngModel) return;

        ngModel.$render = function() {}

        element.bind('change', function(e) {
          var element = e.target;
          if(!element.value) return;

          element.disabled = true;
          $q.all(slice.call(element.files, 0).map(readFile))
            .then(function(values) {
              if (element.multiple) ngModel.$setViewValue(values);
              else ngModel.$setViewValue(values.length ? values[0] : null);
              element.value = null;
              element.disabled = false;
            });

          function readFile(file) {
            var deferred = $q.defer();

            var reader = new FileReader();
            reader.onload = function(e) {
              deferred.resolve(e.target.result);
            };
            reader.onerror = function(e) {
              deferred.reject(e);
            };
            reader.readAsDataURL(file);

            return deferred.promise;
          }

        }); //change

      } //link

    }; //return

  }) //appFilereader
;*/

RealEstateApp.service('fileUpload', ['$http', function ($http) {
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

RealEstateApp.controller('FileUploadController', ['$scope','$sce', 'FileUploadService', function($scope,$sce, FileUploadService){
	
	$scope.fileNames = [];
	$scope.filess = [];
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        //var fileName = "/Users/hannasam/Pictures/Pictures/bgl_apt/"+file.name;
       // $scope.fileNames.push(fileName);
        console.log('file is -' + JSON.stringify(file));
        console.log('----file is ' );
        console.dir(file);
        console.log($scope.fileNames);
       // var uploadUrl = "/fileUpload";
       // fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
    $scope.showFile = function(){
    	$scope.showFileTable = true;
    };

    $scope.uploadFiles = function() {
      var files = angular.copy($scope.files);
      console.log('Please select files!'+files.length);
      for(var i=0; i<files.length;i++){
    	  var file = files[i];
    	  console.log('Please s!'+file.path);
    	  file.imgUri = $sce.trustAsResourceUrl("data:image/png;base64," + file.base64);
    	  $scope.filess.push(file);
      }
      //console.log('Please s!'+$scope.filess);
      FileUploadService.setFiles($scope.filess);
     // $scope.files = $scope.filess;
    };
    
    
}]);
