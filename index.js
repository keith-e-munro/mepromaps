var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Helen I Love You LOTSSS!!!!');
}).listen(8080);