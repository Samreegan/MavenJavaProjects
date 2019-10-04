RealEstateApp.service('FileUploadService', ['$http', function ($http) {
    var files = [];
	var setFiles=function(files){
		this.files = files;
	};
	
	return{
		files:files,
		setFiles:setFiles
	};
}]);