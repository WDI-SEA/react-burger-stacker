import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const ingredientComponents = this.props.list.map((ingredient, i) => {
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
                <h2>Ingredients:</h2>
                {ingredientComponents}
            </div>
        )
    }
}
