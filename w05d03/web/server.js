require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const port = process.env.PORT || 8000;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const client = new pg.Client(config);

client.connect(() => {
  console.log('connected to the database server');
});

const app = express();

app.use(morgan('dev'));

// GET /villains
app.get('/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains;')
    .then((response) => {
      const villains = response.rows;
      res.json(villains);
    });
});

// GET /villains/:id
app.get('/villains/:id', (req, res) => {
  const id = req.params.id;

  client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      const villain = response.rows[0];
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
