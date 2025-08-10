const http = require('http');
const fs = require('fs');
const hostname= 'localhost';
const PORT = 3000;

// simple web server serving "Hello World" text 
// const server = http.createServer((req, res)=>{
//   res.writeHead(200, {'content-type': 'text/plain'});
//   res.end('Hello World!')
// })

//simple web server serving JSON response
// const server = http.createServer((req,res)=>{
//   res.writeHead(200, {'content-type': 'application/json'});
//   res.end(JSON.stringify({data: 'Hello world!'}))
// })

// const server = http.createServer((req, res)=>{
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.end(`<h1>Hello World!</h1><p>This is simple web server response</p>`)
// })

const server= http.createServer((req, res)=>{
  res.writeHead(200, {'content-type':'text/html'});
  fs.readFile('index.html',(err, data)=>{
    if(err){
      res.writeHead(404);
      res.write('Page not found!')
    }else{
      res.write(data);
    }
    res.end();
  })
})

server.listen(PORT, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})