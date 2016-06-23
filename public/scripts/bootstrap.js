require.config({
    baseUrl:'/scripts',
    paths:{
        'angular': '/bower_components/angular/angular',
		'angular-route': '/bower_components/angular-route/angular-route',
		'jquery': '/bower_components/jquery/dist/jquery'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        console.log("myApp bootstraping");
        angular.bootstrap(document, ['app']);
    }
);