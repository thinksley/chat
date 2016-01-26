angular.module('chat').factory('socket',function($rootScope){
    var socket=io.connect('http://'+window.location.host);

    return {
        //listen
        on: function(event,callback){
            socket.on(event,function(){
                var args=arguments;
                //强行刷新视图
                $rootScope.$apply(function(){
                    callback.apply(socket,args);
                })
            })
        },
        //emit
        emit:function(eventName,data){
            socket.emit(eventName,data);
        },
        clear:function(){
            socket.removeAllListeners();
        }
    }
})