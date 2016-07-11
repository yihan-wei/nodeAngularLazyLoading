describe('test testing framework',function(){
	beforeEach(module('app'));
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller =  _$controller_;
	}));

	descrit('test HomeViewController',function(){
		it('test 1',function(){
			var $scope = {};
			var controller = $controller('AboutViewController', {$scope:$scope});
			console.log($scope.page);

		});
	});
});