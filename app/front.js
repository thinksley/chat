var chatApp =angular.module('chat',['ngRoute']);

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