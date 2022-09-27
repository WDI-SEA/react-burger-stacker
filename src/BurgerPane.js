import React, { Component} from "react"
import BurgerStack from "./BurgerStack"
import Ingredients from "./Ingredients"

export default class BurgerPane extends Component{
  render(){
    return(
      <>
      <h1> Build the burger in  here</h1>
      <BurgerStack />
      <button> Clear Burger </button>
      </>
    )
  }
}
