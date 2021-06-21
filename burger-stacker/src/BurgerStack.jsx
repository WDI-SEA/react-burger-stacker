import React, { Component} from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
    render() {
        let selectedIngredients = this.props.burgerIngredients.reverse().map((item) => (
            <li>
                <Ingredients ingredients={item.name} color={item.color}/>
            </li>
        ))
        return (
            <ul>
                {selectedIngredients}
            </ul>
        )
    }
}