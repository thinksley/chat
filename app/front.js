var chatApp =angular.module('chat',['ngRoute']);

chatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'pages/room.html',
                controller: 'RoomCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);