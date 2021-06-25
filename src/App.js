import { useState } from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'




const App = () => {
  
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
  const [burgerIngredients, burgerBuild] = useState([])

  const addToBurger = (e) => {
    let currentBurger = burgerIngredients
    let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    currentBurger.push(newIngredient)
    console.log('clicked')
  
      // burgerBuild
   
  }

  const clearBurger = (e) => {
    let burgerIngredients = []
    burgerBuild(burgerIngredients)
  }

  
    return (
      <div style={{display: "flex", alignItems:"flex-end"}}>
        <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
        <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger} />
      </div>
    )
  
}


export default App;
