define([],function(){
	var myClockDir = function($interval,dateFilter){
		var directive = {
			strict:'E',
			link:function(scope,element){
				scope.format = 'MM/dd/yyyy hh:mm:ss a';
				var intervalId = $interval(function(){
					updateTime();
				},1000);
				var updateTime = function(){
					scope.currTime = dateFilter(new Date(),scope.format);
				};
				element.on('$destroy',function(){
					$interval.cancel(intervalId);
				});
				scope.$watch(scope.format,function(value){
					format = value;
					updateTime();
				})
			},
			template:"<div>Time: {{currTime}} | "+
						"<br class=\"smallScreenBr\"/>"+
						"Format:<input ng-model=\"format\"> "+
					"</div>"
		}
		return directive;
	}
	myClockDir.$inject = ['$interval','dateFilter'];
	return myClockDir;
})