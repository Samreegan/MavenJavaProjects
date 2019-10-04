RealEstateApp.factory("CourseService",[function(){
	
	var courses = [
	               {title:"Java"},
	               {title:"C#.net"},
	               {title:"Angular Js"},
	               {title: "Node Js"},
	               {title : "Mongo db"},
	               {title: "Big data"}
	               ];
	var getCoursesByIds = function(ids){
		console.log("IDS:"+ids);
		var selectedCourses = [];
		for(var i in ids){
			console.log("I:"+i);
			var course = courses[ids[i]];
			selectedCourses.push(course);
		}
		return selectedCourses;
	};
	return{
		getCoursesByIds:getCoursesByIds
	};
}]);