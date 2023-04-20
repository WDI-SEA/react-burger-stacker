import React, { Component } from 'react';

class ClearBurgerButton extends Component {
  render() {
    return (
      <button onClick={this.props.clearBurger}>Clear Burger</button>
    );
  }
}

export default ClearBurgerButton;
