  
import React, { Component } from 'react'
import Ingredient from './Ingredient'


class BurgerStack extends Component {
    render() {
        // call .map on our passed props array
        let burgerIngredients = this.props.burgerIngredients.reverse().map((item, index) => (
            <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`} />
        ))

        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
    }
}

export default BurgerStack