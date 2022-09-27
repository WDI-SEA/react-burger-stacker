import React, { Component} from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";
import "./App.css"



export default class App extends Component{
  render(){
    return(
      <>
      <h1> Burger Builder </h1>
       <IngredientList /> 
      <BurgerPane />
      </>
    )
  }
}

