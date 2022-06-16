const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync(10);
// console.log('salt', salt);

const password = 'secret';

const hash = bcrypt.hashSync(password, salt);
console.log('hash', hash);

const hashedPassword = '$2a$10$f1KHk4fq3qq8is1.sOWKQOCGHMUBd.dmsAGvzdDRPjUOJ1GHrfoaa';

const result = bcrypt.compareSync('secret', hashedPassword);
console.log('result', result);

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('async salt:', salt);
//     bcrypt.hash(password, salt)
//       .then((hash) => console.log(hash));
//   })

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('async salt:', salt);
//     return bcrypt.hash(password, salt);
//   })
//   .then((hash) => {
//     console.log('async hash:', hash);
//   });









