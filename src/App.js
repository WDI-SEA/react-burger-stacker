import React, { useState } from 'react';
import './App.css';
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'

let burgerSeed = [
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
  ]

function App() {
  // use state hook to track update of ingredient data
  const [ingredients, setIngredients] = useState([burgerSeed])
  
  return (
    <div className="App">
     <IngredientsList ingredients={ingredients} />
     <BurgerPane ingredients={ingredients}/>
    </div>
  );
}

export default App;
