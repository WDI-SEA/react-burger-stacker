import React, { Component} from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";
import "./index.css"



export default class App extends Component{
  render(){
    return(
      <div>
          <div className="ingredients">
              <h1> Burger Builder </h1>
              <IngredientList /> 
          </div>

          <div className="burgerPane">
            <BurgerPane />
          </div>
      </div>
    )
  }
}

