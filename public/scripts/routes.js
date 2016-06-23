define([],function(){
    return {
        defaultRoutePath:'/',
        routes:{
            '/':{
                templateUrl:'/views/home.html',
                dependencies:[
                    'controllers/HomeViewController',
                    'services/todoService'
                ]
            }
        }
    }
})