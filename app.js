var express=require('express');
var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'app')));

var server =app.listen(8080);
var io=require('socket.io').listen(server);
