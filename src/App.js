import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import BurgerPane from "./components/BurgerPane";
import IngredientList from "./components/IngredientList";

const ingredientsArr = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];

export default class App extends Component {
  handleAddToStack = (e) => {
    console.log("add to stack");
    const newStateIngredient = {
      name: e.target.innerText,
      color: e.target.style.backgroundColor,
    };
    // create copy of current state
    const stateCopy = this.state.stack;
    //add newly created ingredient variable to my copy of state
    stateCopy.push(newStateIngredient);
    this.setState({
      stack: stateCopy,
    });
  };
  // function to reset state to empty array
  handleRemoveFromStack = (e) => {
    console.log("remove from stack");
    // TODO set state
    this.setState({
      stack: [],
    });
  };
  state = {
    stack: [],
  };
  render() {
    return (
      <div className=" grid grid-cols-2 ">
        <h1 className="text-3xl col-span-2 ">Burger Stacker</h1>
        <IngredientList
          items={ingredientsArr}
          handleAddToStack={this.handleAddToStack}
        />
        <BurgerPane
          stack={this.state.stack}
          handleRemoveFromStack={this.handleRemoveFromStack}
        />
      </div>
    );
  }
}
