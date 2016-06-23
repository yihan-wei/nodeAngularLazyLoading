define(['app'], function(app)
{
	app.controller('HomeViewController',
    [
        '$scope','todoService',

        function($scope,todoService)
        {
            console.log("HomeViewController created");
            $scope.todoList = [];
            todoService.getTodo('Emma').then(function(response){
                console.log(response);
                $scope.todoList = response.data;
            });
            
        }
    ]);
});