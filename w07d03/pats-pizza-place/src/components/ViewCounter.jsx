import {useState} from 'react';

const ViewCounter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => {
      return prev + 1;
    });
    setCount((latestValueForCount) => {
      return latestValueForCount + 1;
    });
    setCount((latestValueForCount) => {
      return latestValueForCount + 1;
    });

    // setCount(latestValueForCount => latestValueForCount + 1);
  };

  return (
    <div>
      <h2>View Counter</h2>
      <h2>Visitors: {count}</h2>
      <button onClick={clickHandler}>Click me!!</button>
    </div>
  );
};

export default ViewCounter;
