import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    render() {
        // map over array of ingredients
        let ingredientComponents = this.props.ingredients.map((ingredient, index) => {
            return ( 
                <li>
                    <Ingredients 
                        name={ ingredient.name }
                        color={ ingredient.color }
                        key={ index }
                    />
                </li>
            )
        })

        return (
            <ul>
                { ingredientComponents }
            </ul>
        )
    }
}