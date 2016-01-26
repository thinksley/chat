angular.module('chat').
controller('RoomCtrl',function($scope,$rootScope,socket){

        $scope.messages=[];
        $scope.createMessage=function(){
            if($scope.newMessage){
                socket.emit('createMessage',{
                    content:$scope.newMessage,
                    creator:$rootScope.user,
                    creatAt:new Date()
                });
                $scope.newMessage='';
            }

        }

        socket.on('message.add',function(data){
            $scope.messages.push(data);
        })

        //向服务器请求所有消息
        socket.emit('allMessages');
        socket.on('allMessages',function(data){
            $scope.messages=data;
        })

        $scope.$on('$destroy',function(){
            socket.clear();
        })

})