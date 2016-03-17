var fs = require('fs');
var http = require('http');
var file = "fundstarter.html";
var requestListener = function (req, res) {
  //Check if file exists and get its size.
  fs.stat(file, function (err,stats) {
    if (err) {
      res.writeHead(404);
      res.end("File not found!");
      return console.log(err);
    }
    //Open file.
    fs.open(file, 'r', function (err,fd) {
      if (err) {
        res.writeHead(404);
        res.end("File not found!");
        return console.log(err);
      }

      var buffer = new Buffer(stats.size);
      //Read file.
      fs.read(fd, buffer, 0, stats.size, 0, function (err,bytesRead,buffer) {
        if (err) {
          res.writeHead(500);
          res.end("Error reading file!");
          return console.log(err);
        }

        //Write file to response.
        res.writeHead(200);
        res.end(buffer.toString('utf8'));
      });
    });
  });
};

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
