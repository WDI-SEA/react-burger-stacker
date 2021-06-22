import React, {Component} from 'react'
import Ingredients from './Ingredients'
 
export default class Buger extends Component {
    render() {
        let ingredients = this.props.addedIngredients.reverse().map((item, index) => (
            <li>
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