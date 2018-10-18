var app = require('express')();
var http = require('http').Server(app);
//Nueva instancia de socket.io
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//Inicializa socket.io
io.on('connection', function (socket) {
  console.log('a user connected');
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});