import React, { Component } from 'react';

class BurgerIngredient extends Component {
  render() {
    const { ingredient } = this.props;

    return <div className={ingredient.name.toLowerCase()}></div>;
  }
}

export default BurgerIngredient;
