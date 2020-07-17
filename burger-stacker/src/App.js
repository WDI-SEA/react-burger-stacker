import React, { useState } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';


function App() {
  let [ingredients] = useState([
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]);

  let [CurrentIngredients, setCurrentIngredients] = useState([]);

  const addIngredient = (e) => {
    setCurrentIngredients([e.target.value, ...CurrentIngredients]);
  }

  const clearStack = (e) => {
    setCurrentIngredients([])
  }

  return (

    <div className="container">
      <h1 className="title">Burger Stacker</h1>
      <ul className="test">
        <li>
          <IngredientList ingredients={ingredients} addIngredient={addIngredient} />
        </li>
        <li>
          <BurgerPane ingredients={CurrentIngredients} clearStack={clearStack} />
        </li>
      </ul>



    </div>
  );
}

export default App;
