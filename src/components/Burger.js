import React, {Component} from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
  }

  render() {
    return (
      <>
          <div className="burgerIngredients">
              Burger
          </div>
          <div className="ingredientsBlock">
              <p>Lettuce</p>
              <div className="ingrBtns">
              <button onClick={() => this.addRemoveIngredient('add', 'lettuce')} className="ingrBtn">Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')} className="ingrBtn">Remove</button>
              </div>
          </div>
      </>
    );
  }
}
