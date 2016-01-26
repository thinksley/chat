var chatApp =angular.module('chat',['ngRoute','angularMoment']);

chatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'pages/room.html',
                controller: 'RoomCtrl'
            }).
            when('/reg', {
                templateUrl: 'pages/reg.html',
                controller: 'RegCtrl'
            }).
            when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'LoginCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

angular.module('chat').run(function($rootScope,$location,validator,amMoment){
    amMoment.changeLocale('zh-cn');
    validator.success(function(data){

        if(data['code']==1){
            $rootScope.user=data['user'];
            $location.path('/');
        }else{
            $location.path('/login')
        }
    }).error(function(data){
        $location.path('/login')
    })
})