const http = require("http");

const server = http.createServer(function (req, res) {
    res.write("Hello World. This is my Nodejs Server");
    res.end();
});

server.listen(10000);
