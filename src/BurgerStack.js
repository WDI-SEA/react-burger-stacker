import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render(){
        let burgerIngredients = this.props.clickedIngredients.reverse().map((item) => {
            return <li>
                        <Ingredient ingredient={item.name} color={item.color} />
                    </li>
        })

        return(
            <ul>
                {burgerIngredients}
            </ul>
        )
    }
}
