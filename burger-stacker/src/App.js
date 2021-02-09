import React, { useState } from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


let ingredients = [
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
  const [burgerIngredients, setBurgerIngredients] = useState([])

  let addToBurger = (e) => {
    // let currentBurger = burgerIngredients
    let newIngredient = {name: e.target.innerText}
    // currentBurger.push(newIngredient)
    setBurgerIngredients([newIngredient, ...burgerIngredients])
    console.log(burgerIngredients)
  }

  //  setBurgerIngredients(burgerIngredients)

  let clearBurger = (e) => {
    setBurgerIngredients([])
  }

  return (
    <div className="App">
      <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
      <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger}  />
      
    </div>
  );
}

export default App;
