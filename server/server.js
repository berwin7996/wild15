var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var jwt = require('jsonwebtoken');
// var cloudinary = require('cloudinary');


var app = express();
app.use(cors());

// log requests to console
app.use(morgan('dev'));

app.use(express.static(__dirname + '/instruments'));
// app.use(express.static(__dirname + '/public'));
// app.use(require(__dirname + '/router')(io));


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// var io = require('socket.io').listen(app);





// router
var router = require('./router')(app);
module.exports = app;
var server = app.listen(9001);
var io = require('socket.io').listen(server);
console.log("Listening on port 9001");


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });

  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


io.on('connection', function(socket){
    socket.on('triangle', function(data){
      console.log('tri');
      io.emit('playtriangle', data);
    });  

    socket.on('piano', function(data){
      console.log('piano');
      io.emit('playpiano', data);
    }); 

    socket.on('drums', function(data){
      console.log('drum');
      io.emit('playdrums', data);
    }); 
});
