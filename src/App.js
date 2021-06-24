import { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

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

const App = () => {
  // state = {
  //     clickedIngredients: []
  // }
  const [clickedIngredients, setClickedIngredients] = useState([])

  const addToBurger = (e) => {
    // get value of clicked ingredient and color
    const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}

    // create a new array with current clickedIngredients status and append new ingredient
    const updatedClickedIngredients = clickedIngredients.concat(newIngredient)

    // setState with new clickIngredients array
    setClickedIngredients(updatedClickedIngredients)
    // setClickedIngredients(clickedIngredients => [...clickedIngredients, updatedClickedIngredients])
    // this.setState({
    //   clickedIngredients: updatedClickedIngredients
    // })
  }

  const clearBurger = (e) => {
    setClickedIngredients([])
    // this.setState({
    //   clickedIngredients: []
    // })
  }

  return(
    <div style={{display: 'flex', alignItems:'flex-end'}}>
      <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
      <BurgerPane clickedIngredients={clickedIngredients} clearBurger={clearBurger} />
    </div>
  )
}

export default App