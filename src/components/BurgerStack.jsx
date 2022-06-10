import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
  render() {
    const burgerIngredients = this.props.burgerIngredients.reverse().map((item, index) => (
        <li key={index}>
            <Ingredient ingredient={item.name} color={item.color}/>
        </li>
    ))
    return (
        <ul style={{marginBottom: "1em"}}>
            {burgerIngredients}
        </ul>
    )
  }
}