import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const ingredientData = [
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
      const [fixins, setFixins] = useState([])

  const addToBurger = (e) => {
    // get value of clicked ingredient and color
    const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    // create a new array with current current burgerIngredients status and append new ingredient
    // const updatedBurgerIngredients = fixins.concat(newIngredient)
    // setState with new BurgerIngredients array 
    setFixins([newIngredient, ...fixins])
  } 

  const clearBurger = (e) => {
    setFixins([])
  }
    // const ingredients = ingredientData.map((ingredient, index) => {
      // return <Ingredients
      // name={ingredient.name}
      // color={ingredient.color}
      // key={index}
      
    return (
      <div style={{display: "flex", alignItems:"flex-end" }}>
        <IngredientList ingredientData={ingredientData} addToBurger={addToBurger} />
        <BurgerPane burgerIngredients={fixins} clearBurger={clearBurger} />
      </div>
    )
}  

   
export default App;
