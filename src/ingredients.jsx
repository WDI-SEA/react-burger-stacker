import React, {Component} from 'react';

export default class Ingredients extends Component {
  render(){
    const styles = {
      backgroundColor: this.props.ingredient.color,
      color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black'
    }
    return(
        <button style={styles} onClick={()=>this.props.addIngredient(this.props.ingredient)}>{this.props.ingredient.name}</button>
    )
  }
}