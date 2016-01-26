angular.module('chat').
    controller('LoginCtrl',function($rootScope,$scope,$http,socket,$location){
        $scope.user={};
        $scope.login=function(){
            $http({
                url:'/users/login',
                method:'POST',
                data:$scope.user
            }).success(function(data){

                if(data['code']==1){
                    $rootScope.user=data['user'];
                    $location.path('/');
                }
            }).error(function(data){
                alert(data)
            })
        }

    })