import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPane extends Component {
  render () {
    return (
      <div className="pane">
        <h3>Make your own burger</h3>
        <BurgerStack burgerBits={this.props.burgerBits} />
        <ClearBurger />
      </div>
      
    )
  }
};

export default BurgerPane; 

