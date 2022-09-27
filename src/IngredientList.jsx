import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const ingredientsList = this.props.ingredients.map((ingredient, i) => {
            return (
                <div
                    key={`ing${i}`}
                    onClick={e => this.props.addIngredient(e, ingredient.name, ingredient.color)}
                >
                    <Ingredient
                        name={ingredient.name}
                        color={ingredient.color}
                    />
                </div>
            )
        })
        return (
            <div className='ingredient-list'>
                <h2>Ingredients</h2>

                <div>
                    {ingredientsList}
                </div>
            </div>
        )
    }
}