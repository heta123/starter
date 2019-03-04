var http = require('http');
var fs = require('fs');
var path = require('path');
// function onRequest(request, response){
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     // response.write('Hello Bitbroker');
//     // response.end();
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(response);
// }
// http.createServer(onRequest).listen(8000,'127.0.0.1');

http.createServer(function(req,res){
    if(req.url === "/"){
        fs.readFile("./public/index.html","UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,'public',req.url);
        // console.log(csspath);
        var fileStream = fs.createReadStream(cssPath,"UTF-8");
        res.writeHead(200,{"Content-Type": "text/css"} );
        fileStream.pipe(res);
    }else if(req.url.match("\.jpg$")){
        var imagePath1 = path.join(__dirname,'public',req.url);
        var fileStream = fs.createReadStream(imagePath1);
        res.writeHead(200,{"Content-Type": "image/jpg"} );
        fileStream.pipe(res);
    }else if(req.url.match("\.js$")){
        var jsPath = path.join(__dirname,'public',req.url);
        var fileStream = fs.createReadStream(jsPath);
        res.writeHead(200,{"Content-Type": "application/javascript"} );
        fileStream.pipe(res);
    }else if(req.url.match("\.png$")){
        var imagePath2 = path.join(__dirname,'public',req.url);
        var fileStream = fs.createReadStream(imagePath2);
        res.writeHead(200,{"Content-Type": "image/png"} );
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.end("No page found"); 
    }
   
    console.log(req.url);
}).listen(8000);