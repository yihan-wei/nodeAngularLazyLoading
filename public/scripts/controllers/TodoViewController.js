define(['app'], function(app)
{
	app.controller('TodoViewController',
    [
        '$scope','todoService',

        function($scope,todoService)
        {
            console.log("TodoViewController created");
            $scope.todoCalling = true;
            $scope.todoCallFailed = false;
            $scope.todoList = [];
            todoService.getTodo('Emma').then(function(response){
                if(response==='error'){
                    $scope.todoCallFailed = true;
                    $scope.todoCalling = false;
                }else{
                    $scope.todoCalling = false;
                    $scope.todoList = response.data;
                }
            });
            
        }
    ]);
});