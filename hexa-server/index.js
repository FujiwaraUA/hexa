var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var socket = socketio(server);

server.listen(3000, () => console.log('listening on *:3000'));

socket.on('connection', (socket) => {
  console.log('user connected', socket.id);

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
  socket.on('disconnect', function(){
  console.log('user disconnected', socket.id);
});
});
