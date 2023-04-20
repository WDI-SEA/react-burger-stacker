import React, { Component } from "react"
import Burger from "./components/Burger"
import IngredientsList from "./components/IngredientsList"
import Ingredients from "./components/Ingredients"

export default class App extends Component {
  render() {
    return(
      <>
        <IngredientsList 
        Ingredients={Ingredients}
        />
        <Burger 
        Ingredients={Ingredients}
        />
      
      </>

    )
  }
}
