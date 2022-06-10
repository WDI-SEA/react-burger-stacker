import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {


    //handler
    handleClick = (ingredient) => {
        this.props.addIngredients(ingredient)
    }

    render() {
        const ingredients = this.props.ingredients.map((ingredient, i) => {
            return <li key={`ingredient ${i}`} onClick={() => { this.handleClick(ingredient) }} style={{ backgroundColor: ingredient.color }}> {ingredient.name} </li>
        })

        return (
            <>
                <h1>IngredientList</h1>
                <ul>
                    <Ingredient ingredients={ingredients} />
                </ul>

            </>
        )
    }
}