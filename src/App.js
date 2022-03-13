// import './App.css';
import React, { useState } from 'react'
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

export default function App(props) {

  const [burgerIngredients, setBurgerIngredients] = useState([])
  
  const addToBurger = (name,color) => {
    let newBurgerList = [...burgerIngredients]
    newBurgerList.unshift({name,color})     
    setBurgerIngredients(newBurgerList)    
  }

  const clearBurgerPane = () => {
    setBurgerIngredients([])
  }

  return (
    <>
      <div className='flex-container'>
        <div className='pane'>
          <h1>Burger Stacker</h1>
        </div>
      </div>
      
      
      <div className='flex-container'>  
        <div className='pane'>        
        <IngredientList 
          ingredientsList={props.ingredientsList} 
          addToBurger={addToBurger} 
        />
        </div>
        <div className='pane'>
        <BurgerPane 
          burgerIngredients={burgerIngredients}
          clearBurgerPane={clearBurgerPane}
          />
        </div>
      </div>
      
    </>
  );
}


