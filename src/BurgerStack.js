import React, { Component} from "react"
import Ingredients from "./Ingredients"



export default class BurgerStack extends Component{
  render(){
    return (
      <>
      <h1> This is the burger </h1>
      <Ingredients />
      <button> clear burgere</button>
      </>
    )
  }
}
