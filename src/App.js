import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from "./IngredientList"
import BurgerPane from './BurgerPane'
import Ingredients from './Ingredients';



  function App() {
 const [burger, setBurger] = useState([])
 
  return(
    <>
  <BurgerPane />
  <IngredientList />
  </>
  )
}

export default App;
