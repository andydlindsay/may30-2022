"use strict";
// inputs and outputs, descriptive name
const sayHello = (name, age = 2) => {
    // console.log(`hello there ${name}`);
    return `hello there ${name}`;
};
const returnVal = sayHello('Dean', 42);
const returnVal2 = sayHello('Dean');
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(7)
    .then(data => { });
const higherOrderFunc = (cb) => {
    const result = cb(7);
};
