
const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const http = require('http').Server(app.callback())
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.use(serve(__dirname + '/public'));

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
