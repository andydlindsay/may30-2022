// create an HTTP server
const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log('request method', request.method);
  console.log('request url', request.url);

  // GET /about
  if (request.method === 'GET' && request.url === '/about') {
    response.write('this is the about page');
  }

  // GET /home
  if (request.method === 'GET' && request.url === '/home') {
    response.write('welcome to our web site');
  }

  // response.write('hello there');
  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
