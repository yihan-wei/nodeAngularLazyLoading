require.config({
    baseUrl:'/scripts',
    paths:{
        'angular': '/libs/angular/angular',
		'angular-route': '/libs/angular-route/angular-route',
		'jquery': '/libs/jquery/dist/jquery',
		'angular-animate':'/libs/angular-animate/angular-animate'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap','angular-animate']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'angular-animate':{
			deps:['angular']
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