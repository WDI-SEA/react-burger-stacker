import './App.css';
import IngredientsList from './IngredientList'
import BurgerStack from './BurgerStack';
import { useState, useEffect } from 'react';

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
  { name: 'Onion', color: 'lightyellow' }
]

const App = props => {
//   state = {
//     burgerIngredients: []
//   }
  const [burgerIngredients, setBurgerIngredients] = useState([]) 
  
//   addIngredient = (e) => {
//     e.preventDefault()
//     console.log(e)
//     const burgerCopy = this.state.burgerIngredients.slice(0)
//     burgerCopy.push(e.target.value)
//     this.setState({
//       burgerIngredients: burgerCopy
//     })
//     console.log(this.state.burgerIngredients)
// }
const setIngredients = (e) => {
  e.preventDefault()
  console.log(e)
  const burgerCopy = burgerIngredients.slice(0)
  burgerCopy.push(e.target.value)
  setBurgerIngredients(burgerCopy)
  console.log(burgerIngredients)

}
const clearBurger = (e) =>{
  e.preventDefault()
  setBurgerIngredients([])
}
    return (
      <div className="container">
        <IngredientsList ingredients={ingredients} buttonClick={setIngredients} />
        <BurgerStack stack={burgerIngredients} color={ingredients}/>
      </div>
    )
  }

export default App