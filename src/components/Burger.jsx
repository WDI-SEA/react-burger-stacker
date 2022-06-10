
import React, { Component } from 'react'
import Ingredient from './ingredients'

export default class Burger extends Component {
    render() {
        const burgerComponents = this.props.burg.map((ingredient, i) => {
            return (
                <Ingredient
                    key={i}
                    name={ingredient.name}
                    color={ingredient.color}
                    onIngredientClick={this.props.onIngredientClick}
                />
            )
        })
        return (
            <div>
                {burgerComponents}
            </div>
        )
    }
}
