// inputs and outputs, descriptive name

const sayHello = (name: string, age: number = 2): string => {
  // console.log(`hello there ${name}`);
  return `hello there ${name}`;
};

const returnVal = sayHello('Dean', 42);
const returnVal2 = sayHello('Dean');

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  })
};

returningPromise(7)
  .then(data => {});

const higherOrderFunc = (cb: (num: number) => boolean): void => {
  const result = cb(7);
};
