var fs = require('fs');
var http = require('http');
var requestListener = function (req, res) {
  fs.readFile("fundstarter.html", 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.writeHead(200);
    res.end(data);
  });
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
