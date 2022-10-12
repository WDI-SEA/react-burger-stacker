import React, { useState } from 'react'
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

export default function App() {
  const [clickedIngredients, setClickedIngredients] = useState([])

  const handleIngredientClick = ingredient => {
   
    console.log(ingredient)
    setClickedIngredients([ingredient, ...clickedIngredients])
  }

  // clear button click handler, which will empty the array in state
  const handleBurgerClear = () => {
    setClickedIngredients([])
  }

    return (
      <div style={{ display: 'flex', margin: '3rem', alignItems: 'flex-end' }}>
       
        <IngredientList 
          ingredients={ingredients}
          handleIngredientClick={handleIngredientClick}
        />

        {/* will recive the clear button event handler, and the clicked ingredients from state to render */}
        <BurgerPane 
          clickedIngredients={clickedIngredients}
          handleBurgerClear={handleBurgerClear}
        />
      </div>
    )
}