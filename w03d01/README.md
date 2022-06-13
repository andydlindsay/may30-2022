# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

http://www.lighthouselabs.com
http://localhost:8080/u/30h5xg

### Servers
* server - has data
* client - wants data

* web servers
  * serve up content related to the web (HTML, CSS, JS, video, image, JSON)
  * communicates via HTTP

  localhost === 127.0.0.1

### HTTP
* HyperText Transfer Protocol
* TCP - medium of communication
* IP - giving the exact spot where something lives (address)\
* Request/Response process

### Request
* host
* port 65,535 to choose from

* verb/method - tells the server what you want to do
  * GET - retrieve something
  * POST - send something
* action/url - tells the server what you want to do it to
  * everything after domain:port
  * http://localhost:8080       /u/30h5xg
  * https://www.youtube.com     /videos/asdkfhjkalsdjf

### Response
* may or may not have a body/payload/contents (`res.send()`)
* status code: 404, 200, 500, 400, 401

1xx - routing codes
2xx - everything is okay
3xx - redirection
4xx - something wrong with request
5xx - something wrong with the server


Move up!                    You ded!
Client <====== TCP ========> Server


                              Request
Client <===== TCP/HTTP ======> Server

```js
// creating a TCP server
const net = require('net');
const port = 1234;

const server = net.createServer();

server.on('connection', (connection) => {
  connection.write('hello there');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

```js
// create an HTTP server
const http = require('http');
const port = 1234;

const server = http.createServer();

server.on('request', (request, response) => {
  response.write('hello there');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```
favicon.ico

ftp
postgres

Express
Koa
Hapi
Restify

Everything sent over the pipe/wire, is a string

### Middleware
* not unique to express or JS
* code that runs between the request and the response
* typically used for parsing

* header => cookies

Request ======> Callback =====> Response

                cookie-parser    body-parser
Request ======> Middleware ====> Middleware ====> Callback =====> Response
                req.cookies       req.body        res.send
                next()            next()          








