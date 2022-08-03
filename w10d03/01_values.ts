let age: number = 42;
let username: string | number | boolean = 'Alice';

username = 'Bob';
username = 7;
username = false;

age = 7;

const names: (string | number)[] = [];

names.push('Carol');
names.push(42);

// names.push(true);

const something = names.pop();

