import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import './App.css'
import {useState} from 'react'

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

function App() {

  const [burgerIngredients , setBurgerIngredients] = useState(ingredients)
  const [burgerArray, setBurgerArray] = useState([])
  



  const handleIngredientClick = e => {
    const ingredient = burgerIngredients.find(({name}) => {
        return (name === e.target.innerText)
    })
    setBurgerArray([ingredient, ...burgerArray])
}
 const handleBurgerClear = () => {
      setBurgerArray([])
  }

  return (
      <div className='Container'>
        <div className='CreateCol'>
          <IngredientList 
          ingredients={burgerIngredients} 
          handleIngredientClick={handleIngredientClick}
          />
        </div>

        <div className='DisplayCol'>
          <BurgerPane 
          burgerArray={burgerArray}
          handleBurgerClear={handleBurgerClear}
          />
        </div>
      </div>
    )
}

export default App