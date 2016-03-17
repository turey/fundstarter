var fs = require('fs');
var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end(fs.readFileSync("fundstarter.html"));
}

var server = http.createServer(requestListener);
server.listen(8080);
