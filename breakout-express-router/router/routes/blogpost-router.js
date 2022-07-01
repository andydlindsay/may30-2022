const express = require('express');
const router = express.Router();

const blogpostRouter = (db) => {
  router.use((req, res, next) => {
    // if (!req.cookies.user_id) {
    //   return res.redirect('/login');
    // }
    console.log('inside the blogpost router');

    next();
  });

  // GET /blogposts/
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts;')
      .then((response) => {
        res.json(response.rows);
      });
  });

  // GET /blogposts/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then((response) => {
        res.json(response.rows[0]);
      });
  });

  return router;
};

module.exports = blogpostRouter;
