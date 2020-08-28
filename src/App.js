import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from "./IngredientList"
import BurgerPane from './BurgerPane'
import ingredients from "./Ingredients"




  function App() {
 const [burger, setBurger] = useState([])
 
 const addToBurger = (ingredient) => 
 setBurger(burger.concat(ingredient))

 const clearBurger = () => setBurger([])
 


  return(
    <div className="burgerApp">
  <BurgerPane burger={burger} clearBurger={clearBurger}/>
  <IngredientList addToBurger={addToBurger}/>
  </div>
  )
  }

export default App;
