const express = require('express');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 8083;

// data
const users = {
  nally: {
    username: 'nally', 
    password: 'qwerty'
  },
  monkey: {
    username: 'monkey',
    password: 'fuzz'
  },
  turtle: {
    username: 'turtle',
    password: 'donut'
  },
};

// helpers
const findUserByUsername = (username) => {
  for (const userKey in users) {
    if (users[userKey].username === username) {
      return users[userKey];
    }
  }

  return null;
};

// configure express
app.set('view engine','ejs');

// Middleware
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cookieSession({
  name: 'tiny',
  keys: ['they', 'can', 'be', 'whatever'],
}));

// Routes

// home
app.get('/', (req,res) => {
  // const username = req.cookies.username;
  const username = req.session.user;
  res.render('homepage', {username: username});
});

// registration form
app.get('/register', (req,res) => {
  res.render('register', {username: null});
});

// registration end-point
app.post('/register', (req,res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;

  // check if a user with that username already exists
  const currentUser = findUserByUsername(newUsername);

  if (currentUser) {
    return res.status(400).send('A user with that username already exists');
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(newPassword, salt);

  const newUser = {
    username: newUsername,
    password: hashedPassword
  };

  users[newUsername] = newUser;

  console.log('users:', users);

  res.redirect('/login');
});

// login form
app.get('/login', (req,res) => {
  res.render('login', {username: null});
});


// login end-point
app.post('/login', (req,res) => {
  const candidateUsername = req.body.username;
  const candidatePassword = req.body.password;

  // check if a user with that username exists
  const user = findUserByUsername(candidateUsername);

  if (!user) {
    return res.status(400).send('No user with that username found');
  }

  // check if passwords match
  const result = bcrypt.compareSync(candidatePassword, user.password);

  if (!result) {
    console.log('NOT logged in');
    return res.status(401).send('Passwords do not match');
  }

  console.log('successfully logged in');

  // res.cookie('user', user.username);
  req.session.user = user.username;

  res.redirect('/profile');
});

// profile
app.get('/profile', (req, res) => {
  // const username = req.cookies.user;
  const username = req.session.user;

  if (username) {
    const secret = users[username].password;
    const templateVars = {
      username: username, 
      secret: secret
    };
    return res.render('profile', templateVars); // secrets  
  }

  res.redirect('/login');
});

// logout
app.post('/logout', (req,res) => {
  // res.clearCookie('user');
  req.session = null;

  res.redirect('/');
});

// 404
app.get('*', (req,res) => {
  // res.render('404');
  res.redirect('/');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
