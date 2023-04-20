import React, { Component } from 'react';
import Ingredient from './Ingredient';

class BurgerStack extends Component {
  render() {


    return (
      <div>
        <h1>Burger Stack</h1>
        <ul>
          {this.props.burgerStack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BurgerStack;
