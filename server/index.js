const server = require('http').createServer()

const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

let timeChange

const data = [
  { name: 1, x: 1, y: 12 },
  { name: 2, x: 2, y: 4 },
  { name: 3, x: 3, y: 9 },
  { name: 4, x: 4, y: 4 },
  { name: 5, x: 5, y: 5 },
];

  
io.on("connection", client => {
  console.log("connected")

  setInterval(() => {
      
    if(data.length > 5 ){
        data.shift()
      }
      data.push( { name: data[data.length - 1].name + 1 , x: Math.random() * 10, y: Math.random() * 10})

      console.log(data)

      client.emit("message", data)
   }, 4000)

})


server.listen(3001)
