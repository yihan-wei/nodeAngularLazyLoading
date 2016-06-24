define(['app'],function(app){
	app.controller('AboutViewController',
	[
		'$scope',
		function($scope){
			console.log('AboutViewController created');
			$scope.page = {
				heading: 'About view'
			};
		}
	]);
});