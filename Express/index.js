const http = require('http');
const PORT = 3000;

const  server = http.createServer(function listener(req, res) {
    ``
    console.log("hello ");
});

server.listen(PORT, function exec() {   
    console.log(`hello, server is UP running on PORT : ${PORT}`);
});