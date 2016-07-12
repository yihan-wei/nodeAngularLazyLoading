define([],function(){
    return {
        defaultRoutePaths:'/viewhome',
        routes:{
            '/viewhome':{
                templateUrl:'/views/home.html',
                dependencies:[
                    'controllers/HomeViewController',
                    'services/todoService'
                ]
            },
            '/viewabout':{
                templateUrl:'/views/about.html',
                dependencies:[
                    'controllers/AboutViewController'
                ]
            },
            '/viewcontact':{
                templateUrl:'/views/contact.html',
                dependencies:[
                    'controllers/ContactViewController'
                ]

            }
        }
    }
})