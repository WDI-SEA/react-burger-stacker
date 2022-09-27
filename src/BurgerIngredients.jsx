import React, {Component} from 'react';
export default class BurgerIngredients extends Component {
  render(){
    const styles = {
      backgroundColor: this.props.ingredient.color,
      color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black'
    }
    return(
      <p style={styles} key={this.key} >{this.props.ingredient.name}</p>
    )
  }
}