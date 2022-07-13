const user = {
  username: 'Alice',
  age: 42,
  faveFoods: ['pancakes']
};

// const copy = user;
const copy = { 
  ...user,
  username: 'Bob',
  faveFoods: [
    ...user.faveFoods,
    'waffles',
    'tacos'
  ]
};

// ...arr => 1,2,3

// const addThreeNumbers = (a, b, c) => {
//   console.log(a + b + c);
// };

// const arr = [1,2,3]
// addThreeNumbers(...arr);
// console.log(...arr);
// console.log(...user);

// copy.username = 'Bob';
// copy.faveFoods.push('waffles');
// copy.faveFoods.push('tacos');

console.log(user);
console.log(copy);
