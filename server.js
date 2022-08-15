/*
*       Hello World Node.js Server for my simpleChat page
*/

const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    // response html page
    if(req.url === '/' || req.url === '/index.html') {
        console.log('I was here')
        fs.readFile("index.html", function (error, pgResp){
            if (error) {
                res.writeHead(404);
                res.write('content you are looking are Not Found');
            } else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(pgResp);
            }
            res.end();        
        }); 
    }else if(req.url === '/styles.css'){ // response css part
        fs.readFile("styles.css", function (error, pgResp){
            if (error) {
                res.writeHead(404);
                res.write('content you are looking are Not Found');
            } else {
                res.writeHead(200, {'Content-type': 'text/css'});
                res.write(pgResp);
            }
            res.end();        
        });
    } else if(req.url === '/script.js'){ // response js part
        console.log('i was in js statement')
        fs.readFile("script.js", function (error, pgResp){
            if (error) {
                res.writeHead(404);
                res.write('content you are looking are Not Found');
            } else {
                res.writeHead(200, {'Content-type': 'text/js'});
                res.write(pgResp);
            }
            res.end();        
        });    
    }
})
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})