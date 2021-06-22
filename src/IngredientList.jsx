import React, {Component} from 'react'
import Ingredients from "./Ingredients"

export default class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map((item, index) => (
            <li onClick={(e) => this.props.addToBurger(e)}>
                <Ingredients
                    name={item.name}
                    color={item.color}
                    key={index}
                />
            </li>
        ))
        return(
            <ul>
                {ingredients}
            </ul>
        )
    }
}