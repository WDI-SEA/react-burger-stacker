import React, { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

function App() {

  const [burgerIngredients, setBurgerIngredients] = useState([])
  const ingredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Tide Pod', color: '#3336FF' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]

  const addItem = (e) => {
    e.preventDefault()
    setBurgerIngredients([{ name: e.target.innerText, color: e.target.style.backgroundColor }, ...burgerIngredients])
  }

  const clearBurger = () => {
    setBurgerIngredients([]);
  }

  return (
    <div id="burgerstacker">
      <div>
        <IngredientList ingredients={ingredients} addItem={addItem} />
      </div>
      <div>
        <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger} />
      </div>
    </div>
  )
}


export default App;
