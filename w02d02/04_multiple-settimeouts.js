const delays = [400, 500, 670, 788, 12, 514, 41, 5, 897];

let waitTime = 0;

for (const delay of delays) {
  waitTime = waitTime + 250;
  // console.log(delay);
  setTimeout(() => {
    console.log(delay);
  }, waitTime);
}
