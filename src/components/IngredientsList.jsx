import React, { Component } from 'react'
import Ingredients from './Ingredients'


export default class IngredientsList extends Component {
    render() {
            const ingredients = this.props.Ingredients.map((ingredient, i)=>{
                return (
                    <div>
                <button key={i} onClick={props.handleStack()}>{ingredient.name}</button>
            </div>
            )
        })
        return (
            <div className='ingredient-list'>
            <h1>The Ingredient List</h1>
            {ingredients}
            </div>
        )
    }
}