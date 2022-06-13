import { useState } from 'react'
import './App.css'
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'

const ingredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
]

const App = () => {
  const [burgerStack, setBurgerStack] = useState([])

  const addIngredient = ingredient => {
    console.log('adding', ingredient)
    setBurgerStack(prevState => [ingredient, ...prevState])
  }

  const clearBurgerStack = () => {
    setBurgerStack([])
  }

  return (
    <div className='flex-container'>
      <IngredientList addIngredient={addIngredient} ingredients={ingredients} />
      <BurgerPane clearBurger={clearBurgerStack} burgerStack={burgerStack} />
    </div>
  )
}

export default App
