import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurgerButton from './ClearBurgerButton';
import IngredientList from './IngredientList';

class BurgerPane extends Component {
  render() {
    return (
      <div>

        <BurgerStack burgerStack={this.props.burgerStack} />
        <ClearBurgerButton clearBurger={this.props.clearBurger} />
      </div>
    );
  }
}

export default BurgerPane;
