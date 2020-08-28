import React, { useState } from 'react';
import './App.css';
// import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane'
import Ingredient from './components/Ingredient'



const App = (props) => {
  const [ingredientStack, setIngredientStack] = useState([])
  const hc = (index) => {
   setIngredientStack([...ingredientStack, props.ingredients[index]])
   console.log(index)
  }

  const clearBurger = () => {
    setIngredientStack([])
  }
  return (
    
    <div className="App">
    <Ingredient ingredients={props.ingredients} handleClick={hc} />
    <BurgerPane  ing={ingredientStack}/>
    <button onClick={clearBurger}>Clear Burger</button>
    </div>
    
  );
}

export default App;
