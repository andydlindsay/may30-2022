const pg = require('pg');

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

const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb', verb);

switch (verb) {
  case 'browse':
    // BROWSE
    client.query(`
        SELECT * 
        FROM movie_villains
        ORDER BY id;
      `)
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    // client.query(`SELECT * FROM movie_villains WHERE id = ${id};`)
    client.query(`SELECT * FROM movie_villains WHERE villain = $1;`, [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });

    break;

  case 'edit':
    const newVillain = process.argv[4];

    client.query('UPDATE movie_villains SET villain = $2 WHERE id = $1;', [id, newVillain])
      .then(() => {
        console.log('villain was updated successfully');
        client.end();
      });

    break;

  case 'add':
    const villainName = process.argv[3];
    const movieName = process.argv[4];

    const query = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';
    client.query(query, [villainName, movieName])
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${villainName}`);
        client.end();
      });

    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('Villain was vanquished successfully');
        client.end();
      });
    break;

  default:
    console.log('please provide a valid verb');
    client.end();
}
