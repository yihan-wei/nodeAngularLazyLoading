define(['routes','services/dependencyResolverFor',''],function(config, dependencyResolverFor){
    var app = angular.module('app',['ngRoute','ngAnimate']);
    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
	        app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

            console.log("registering");
           $locationProvider.html5Mode({
                  enabled: true,
                  requireBase: false
                });
            if(config.routes !== undefined)
            {   
                angular.forEach(config.routes, function(route, path)
                {
                    console.log("registing "+path);
                    console.log('template: ' +route.templateUrl);
                    console.log("dependencies : " + route.dependencies);
                    $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
                $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }
        }
    ]);

    return app;
});