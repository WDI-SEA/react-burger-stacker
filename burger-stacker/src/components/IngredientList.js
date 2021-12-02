import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render () {
        // create clickable elements for all ingredients in the state
        let allIngredients = this.props.ingredients.map(ingredient => (
            <li>
                <Ingredient ingredient={ingredient} clicky={this.props.add} />
            </li>
        ))
        // render ingredients
        return (
            <section className='pane'>
                <h3>Ingredient List</h3>
                <ul className="ingredient-list">
                    { allIngredients }
                </ul>
            </section>
        )
    }
}