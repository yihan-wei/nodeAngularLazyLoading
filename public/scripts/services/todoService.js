define(['app'], function(app)
{
	app.service('todoService',
    [
        '$http',

        function($http)
        {
            console.log('todoService created');
        	this.getTodo = function(user){
        		console.log('service calling todo api');
            	var promise = $http({
	            	method:'GET',
		            url:'/api/todos/'+user
		            }).then(function(data){
		            	return data;
		            }).catch(function(){
		            	return "error";
		            });
	            return promise;
	        }
            
        }
    ]);
});