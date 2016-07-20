define([],function(){
	return function(app){
		app.directive('myClock',['$interval','dateFilter',function($interval,dateFilter){
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
			template:"<div>Time: {{currTime}} | Format:<input ng-model=\"format\"> </div>"
		}
		return directive;
	}])
}})