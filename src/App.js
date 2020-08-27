import React, { useState } from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

let burgerIngredients = [
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
  const [burger, setBurger] = useState([])
  return (
    <div className="App">
      <BurgerPane ingredients={burgerIngredients}
      userBurger={burger} />
      <IngredientList ingredients={burgerIngredients} />
    </div>
  );
}

export default App;
