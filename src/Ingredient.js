import React, { Component} from "react"
import IngredientList from "./IngredientList"

export default class Ingredients extends Component{
  render(){
    const styles = {
      backgroundColor: this.props.ingredient.color,
      color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black' 
  }
    // console.log(this.props.ingredients)
    return(
        <div 
          style={styles}
          onClick ={this.props.handleIngredientClick ?
            ()=> this.props.handleIngredientClick(this.props.ingredient) :
            () => {}
          }
           >
          <p>{this.props.ingredient.name}</p>
        </div>
    )
  }
}
