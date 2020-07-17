import React, { useState } from 'react'
import './App.css';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


const BurgerPane = (props) => {

  //create array for burger ingredients to be pushed to

  //clear burger array
  // let onClearBurger = () => {
  //   setState({ list: [] });
  // };

  return (
    <div className='burger-pane'>
      <div className='burger-stack'>
        <h3>Burger Stacking Area</h3>
      </div>
      <div className='burger-clear'>
        <button>Clear</button>
      </div>
    </div>
  )
}

export default BurgerPane