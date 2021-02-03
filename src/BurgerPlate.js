import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPlate extends Component {
  constructor (props) {
    super()

  }
  render () {
    return (
      <div>
        <h2> Burger Pane </h2>
        {/* Burger Stack component */}
        <BurgerStack burger={this.props.burger} />
        {/* Clear Burger? */}
        <ClearBurger />
      </div>
    )
  }
};

export default BurgerPlate;