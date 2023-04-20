import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ingredients } from "./ingredients";
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"

export default class App extends Component {

  state = {
    listIngredients: ingredients,
    stackedIngredients: []
  }

  handleStack = e => {
    console.log(this.props.name)
  }

  render() {
    return (
      <div className="App">
        <IngredientList className="leftPane" ingredients={ingredients} handleStack={this.handleStack}/>
        <BurgerPane className="rightPane" stackedIngredients={this.state.stackedIngredients}/>
      </div>
    );
  }
}
