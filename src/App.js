import { useState } from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"



const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([])

  const ingredients = [
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

  const addToBurger = (e) => {
    console.log('adding')
    let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    let currentBurger = burgerIngredients.concat(newIngredient)
    setBurgerIngredients(currentBurger)
  }

  const clearBurger = () => {
    setBurgerIngredients([])
  }

  return (
    <div style={{display: "flex", alignItems: "flex-end"}}>
      <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
      <BurgerPane ingredients={burgerIngredients} clearBurger={clearBurger} />
    </div>
  )
}

export default App