var Koa = require('Koa')
var app = new Koa()
var fs = require('fs')
var http = require('http').Server(app.callback());
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(async function(ctx, next){
  ctx.type = 'html'
  ctx.body = fs.createReadStream(__dirname + '/index.html')
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
