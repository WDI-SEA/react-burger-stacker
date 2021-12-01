import React, { Component } from "react";
import Ingredients from "./Ingredients";
import "./MyBurger.css";
import NewBurger from "./NewBurger";

export default class MyBurger extends Component {
  state = {
    ingredientsArray: this.props.theIngredients,
    newFood: [],
  };

  addFood = (e) => {
    console.log(e.target.color);
    e.preventDefault();
    let currentArray = this.state.newFood;
    let addedThings = { name: e.target.name };
    currentArray.unshift(addedThings);
    this.setState({
      newFood: currentArray,
    });
  };

  clearFood = (e) => {
    this.setState({
      newFood: [],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Burger Stacker</h1>
        </div>
        <div className="Burger">
          <NewBurger burgerItems={this.state.newFood} delete={this.clearFood} />
        </div>
        <div className="ingredients">
          <Ingredients
            completeIngredients={this.state.ingredientsArray}
            changedIngredients={this.addFood}
          />
        </div>
      </div>
    );
  }
}
