import React, { useState } from 'react';
import IngredientList from './IngredientList'
import Burgerpane from './BurgerPane'

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

const App = () => {
  // eslint-disable-next-line
  const [ingredients, setIngredients] = useState(burgerSeed)// eslint-disable-next-line
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])

  const addToStack = (e) => {
    console.log("Ingredient was click")
    let result = e.target.innerText
    setBurgerPaneIngredients(result, ...burgerPaneIngredients)
    console.log(burgerPaneIngredients)
  }

  const clearStack = (e) => {
    setBurgerPaneIngredients([])
  }

  return (
    <div className="App">
      <IngredientList ingredients={ingredients} action={addToStack}/>
      <hr />
      <hr />
      <h2>Burger Stack</h2>
      <Burgerpane ingredients={burgerPaneIngredients} action={clearStack}/> 
    </div>
  );
}

export default App;
