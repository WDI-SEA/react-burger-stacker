import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPlate extends Component {
  render () {
    return (
      <div>
        {/* Burger Stack component */}
        <BurgerStack />
        <ClearBurger />
      </div>
    )
  }
};

export default BurgerPlate;