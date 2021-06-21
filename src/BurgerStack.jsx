
import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class BurgerStack extends Component {
    render() {
        // call .map on our passed props array
        let burgerIngredients = this.props.burgerIngredients.reverse().map((item, index) => (
            <li>
                <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`} />
            </li>
        ))

        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
    }
}

