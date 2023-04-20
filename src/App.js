import React, { Component } from "react"
import Burger from "./components/Burger"
import IngredientsList from "./components/IngredientsList"
import Ingredients from "./components/Ingredients"

export default class App extends Component {
  handleStack = (e) => {
        console.log(e.target.value)
    }
  render() {
    return(
      <div className="appFlex">
        <IngredientsList 
          Ingredients= {Ingredients}
          //handleStack= {handleStack() }
        />
        <Burger 
      
        />
      
      </div>

    )
  }
}
