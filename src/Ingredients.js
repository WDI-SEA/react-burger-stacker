import React, { Component} from "react"
import IngredientList from "./IngredientList"

export default class Ingredients extends Component{
  render(){
    console.log(this.props.ingredients)
    return(
      <>
      {/* map as props and display data */}
        <ul>
        {this.props.ingredients.name}
        </ul>
      </>
    )
  }
}
