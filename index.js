const http = require('http');
const port = 3000;

http.createServer((req,res) => {
   res.writeHead(404, {
   	 'Content-length': body.length,
   	 'Content-type': 'text/plain'
   });
   res.statusCode = 200;
   res.write('Hello');
   res.end(' World/n');
}).listen(port);

console.log(`Server running at http://locahost:${port}`);