// User built in package
const net = require("net")

// Create the server
const server = net.createServer((socket) => {
  socket.write("hello")
  socket.on("data", (data) => {
    console.log(data.toString())
  })
})

// Listen to port 8080
server.listen(8080)

// Read README for more information.
