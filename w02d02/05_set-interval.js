let i = 0;

const interval = setInterval(() => {
  i++;
  console.log('hello', i);

  if (i > 10) {
    clearInterval(interval);
  }
}, 500);
