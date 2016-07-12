define(['app'],function(app){
	app.controller('ContactViewController',
	[
		'$scope',
		function($scope){
			 console.log('ContactViewController created');
            $scope.user =
            {
                heading: 'Contact Me',
                describe:'Emma Wei. Keeps learning new skills.',
                email:'emma.wei.java@gmail.com'
            };
            $scope.skillSet = ['Angular','HTML',
            'CSS','JavaScript','React','jQuery',
            'requireJs','nodeJs','Java','Hibernate',
            'Spring','data structure','algorithm'];
		}
	]);
});