import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane.js'

const burger = [
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
  const [ingredients, setIngredients] = useState(burger)
  const [burgerPaneIngredients , setBurgerPaneIngredients] = useState([])

  function addToStack(e) {
    let result = e.target.innerText
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
    console.log(burgerPaneIngredients)

  }

  function clearStack(e) {
    setBurgerPaneIngredients([])
  }

  return (
    <div className="App">
      <h1>Burger Stacker</h1>
      <IngredientList ingredients={ingredients} action={addToStack} />
      <BurgerPane ingredient={burgerPaneIngredients} action={clearStack}/>
    </div>
  );
}

export default App;
