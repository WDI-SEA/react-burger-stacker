import React, { Component } from 'react';
import BurgerIngredient from './BurgerIngredient';

class BurgerStack extends Component {
  render() {
    const { burgerStack } = this.props;

    return (
      <div className="burger-stack">
        {burgerStack.length === 0 && <p>Add some ingredients!</p>}
        {burgerStack.map((ingredient, index) => (
          <BurgerIngredient
            key={index}
            index={index}
            ingredient={ingredient}
          />
        ))}
        <div className="top-bun"></div>
        <div className="filling"></div>
        <div className="bottom-bun"></div>
      </div>
    );
  }
}

export default BurgerStack;
