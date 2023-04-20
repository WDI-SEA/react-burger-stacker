import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPane extends Component {
  render() {
    const { burgerStack, onClearBurger } = this.props;

    return(
    <div className="burger-pane">
    <BurgerStack burgerStack={burgerStack} />
    <ClearBurger onClearBurger={onClearBurger} />
  </div>
    )
}
}

export default BurgerPane;
