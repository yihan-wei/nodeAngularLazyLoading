define([],function(){
    return {
        defaultRoutePaths:'/viewtodo',
        routes:{
            '/viewtodo':{
                templateUrl:'/views/todo.html',
                dependencies:[
                    'controllers/TodoViewController',
                    'services/todoService'
                ]
            },
            '/viewfun':{
                templateUrl:'/views/fun.html',
                dependencies:[
                    'controllers/FunViewController'
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