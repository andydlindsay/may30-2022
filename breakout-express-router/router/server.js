require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const db = require('./db/db');

app.use(morgan('dev'));

// require the routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// app.use the 
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
