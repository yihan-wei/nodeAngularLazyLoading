require.config({
    baseUrl:'/scripts',
    paths:{
        'angular': '/libs/angular/angular',
		'angular-route': '/libs/angular-route/angular-route',
		'jquery': '/libs/jquery/dist/jquery'
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