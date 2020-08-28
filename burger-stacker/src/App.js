import React, { useState } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

function App() {

  const [ingredients, setAdd] = useState([
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ])

  const [burgerIngredients, setBurgerIngredients] = useState([])

  let addIngredient = (e) => {
    let newBurgerIngredients = burgerIngredients;
    newBurgerIngredients.unshift(e.target.value) 
    setBurgerIngredients(newBurgerIngredients)
    console.log(burgerIngredients);
  }

  return (
    <div className="App">
      <IngredientList ingredients={ingredients} 
      onClick={addIngredient}
      />
      <BurgerPane />
    </div>
  );
}

export default App;
