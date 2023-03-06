const dgram = require("dgram")
const socket = dgram.createSocket("udp6")

socket.on("message", (msg, rinfo) => {
  console.log(`Server received ${msg} from ${rinfo.address} on ${rinfo.port}`)
})

socket.bind(8080)
//  echo "hi" | nc -w1 -u 127.0.0.1 8080 in powershell to check
