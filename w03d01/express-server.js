const express = require('express');
const morgan = require('morgan');
const port = 3001;

// create our server
const app = express();

// middleware
app.use((req, res, next) => {
  console.log('a request has come in!!');
  // res.send('you are not supposed to be here');

  // once we're done with whatever we were doing, call next
  next();
});
app.use(morgan('dev'));

// const morganMiddleware = morgan('dev'); // (req, res, next) => {}
// app.use(morganMiddleware);

// GET /home
app.get('/home', (req, res) => {
  res.send('Welcome to our web site!!!');
});

// GET /about
app.get('/about', (req, res) => {
  res.send('This is the about page. Find out more about us!');
});

// tell the server to listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
