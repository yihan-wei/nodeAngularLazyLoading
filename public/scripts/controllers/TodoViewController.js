define(['app'], function(app)
{
	app.controller('TodoViewController',
    [
        '$scope','todoService',

        function($scope,todoService)
        {
            console.log("TodoViewController created");
            $scope.todoList = [];
            todoService.getTodo('Emma').then(function(response){
                console.log(response);
                $scope.todoList = response.data;
            });
            
        }
    ]);
});