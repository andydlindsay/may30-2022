import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'stuffed',
    size: 'l'
  });

  const [topping, setTopping] = useState('');

  const addTopping = () => {
    // const newToppingsArray = [
    //   ...toppings,
    //   topping
    // ];

    // setToppings(newToppingsArray);

    // setToppings((prev) => {
    //   return [
    //     ...prev,
    //     topping
    //   ];
    // });

    setPizza((prev) => {
      return {
        ...prev,
        toppings: [
          ...prev.toppings,
          topping
        ]
      };
    });

    setTopping('');
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  const updateCrustType = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        crustType: event.target.value
      };
    });
  };

  const updatePizzaSize = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        size: event.target.value
      };
    });
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust: {pizza.crustType}</h2>
        <label>New Crust Type:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrustType}
        />
      </div>

      <div>
        <h2>Size: {pizza.size}</h2>
        <label>Select a size:</label>
        <select
          value={pizza.size}
          onChange={updatePizzaSize}
        >
          <option value="s">Small 6"</option>
          <option value="m">Medium 8"</option>
          <option value="l">Large 10"</option>
          <option value="xl">Xtra Large 12"</option>
        </select>
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={topping}
          onChange={(event) => setTopping(event.target.value)}
        />
        <button onClick={addTopping}>Add topping</button>
      </div>

      {mappedToppings}
    </div>
  );
};

export default Pizza;
