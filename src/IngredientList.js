import React, { Component} from "react"
import Ingredients from "./Ingredients"

export default class IngredientList extends Component{
  render(){
    return(
      <>
      <Ingredients />
      <h1> List of ingredints</h1>
      </>
    )
  }
}
