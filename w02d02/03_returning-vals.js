const higherOrderFunc = (cb) => {
  const user = {
    username: 'Alice'
  };

  console.log('1. before the setTimeout');

  setTimeout(() => {
    user.username = 'Bob';
    console.log('inside timeout after updated to bob', user);
    cb(user);
  }, 2000);

  console.log('2. after the setTimeout');
};

console.log('4. before the main call');

higherOrderFunc((updateUser) => {
  console.log('3. inside the callback');
  console.log('updatedUser', updateUser);
});

console.log('5. after the main call');
