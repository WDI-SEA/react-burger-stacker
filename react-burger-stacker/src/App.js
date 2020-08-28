import React, {useState} from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

function App(props) {
let [ingredients, setIngredients] = useState([
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
])

const [burgerPane, setBurgerPane] = useState([])
  
const addIngredients = (e, moveIngredients) => {
  e.preventDefault()
  setBurgerPane([...burgerPane, moveIngredients])
}  

const clearClick = () => setBurgerPane([])

  return (
    
    <div className="body">
      <IngredientList ingredients={ingredients} onClick={addIngredients}/>
      <h1>Burger Stacker</h1>
      <BurgerPane burgerPane={burgerPane} onClick={addIngredients} clearClick={clearClick}/>
    </div>
    
  );
}


export default App
