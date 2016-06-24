define(['app'],function(app){
	app.controller('ContactViewController',
	[
		'$scope',
		function($scope){
			 console.log('ContactViewController created');
            $scope.page =
            {
                heading: 'Contact Me'
            };
		}
	]);
});