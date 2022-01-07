const http = require('http');
const server = http.createServer(function (request, response) {
    response.end("aa");
});
server.listen(3000);