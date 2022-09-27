import React, { Component} from "react"
import "./App.css"
import BurgerStack from "./BurgerStack"
import IngredientList from "./IngredientList"

export default class BurgerPane extends Component{
  render(){
    return(
      <>
      <h1> Build the burger in  here</h1>
      <BurgerStack />
      <IngredientList />
      </>
    )
  }
}
