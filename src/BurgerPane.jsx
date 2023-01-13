import React, { Component } from 'react';
import BurgerStack from './BurgerStack';

export default class BurgerPane extends Component {
  render() {
    return (
      <div className="BurgerPane">
        <BurgerStack ingredients={this.props.ingredients} />
        <button onClick={this.props.clearBurger}>Clear Burger</button>
      </div>
    )
  }
}