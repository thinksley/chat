angular.module('chat').
controller('RoomCtrl',function($scope,$rootScope,socket){

        $scope.room={messages:[],users:[]};
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
            $scope.room.messages.push(data);
        })

        //向服务器请求所有消息
        socket.emit('room');
        socket.on('room',function(room){
            $scope.room=room;
        })

        $scope.$on('$destroy',function(){
            socket.clear();
        })

})