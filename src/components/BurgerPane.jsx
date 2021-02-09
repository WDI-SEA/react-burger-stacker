import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
  
    return (
      <div className="pane">
        <h3>Make your own burger</h3>
        <BurgerStack burgerBits={props.burgerBits} />
        <ClearBurger clearBurger={props.clearBurger}/>
      </div>
      
    )
  
};

export default BurgerPane; 

