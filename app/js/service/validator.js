angular.module('chat').factory('validator',function($http){
    return $http({
        url:'/users/validate',
        method:'GET'
    })
});