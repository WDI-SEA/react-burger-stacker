import React, { useState } from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'




function App() {
  const [burger, setBurger] = useState([]);
  const [ingredients] = useState([
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
  ])



  const addIngredient = (newIng) => {
    newIng.preventDefault()
    setBurger([{ name: newIng.target.innerText, color: newIng.target.style.backgroundColor }, ...burger])
    console.log(burger)
  }


  const resetBurger = (e) => {
    e.preventDefault()
    setBurger([]);
  }

  return (
    <div className="App">
      <div>
        <IngredientList ingredient={ingredients} addIngredient={addIngredient} />
      </div>
      <div>
        <BurgerPane burger={burger} resetBurger={resetBurger}/>
      </div>
    </div>
  );
}

export default App;
