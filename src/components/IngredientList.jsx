import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
  render() {
    // use .map and take array of props
    const ingredientComponets = this.props.ingredients.map((item, index) => (
        <li 
        onClick={(e) => this.props.addToBurger(e)} 
        key={index}
        >
            <Ingredient ingredient={item.name} color={item.color}/>
        </li>
    ))    
    return (        
        <ul>
          {ingredientComponets}
        </ul>
    )
  }
}