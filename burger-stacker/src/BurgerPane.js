import React, { Component } from 'react'
import IngredientList from './IngredientList'


export default class BurgerPane extends Component {
    render () {
        const renderedIngredients = this.props.selectedIngredients.map(ingredient => {
            return (
                <div className="ingredient-row">
                  <h1>{ingredient}</h1>
                </div>
              )
        })
        return (
            <div className='burger-ingredients'>
            <h1>burger:</h1>
            <ul>{renderedIngredients}</ul>
            <button onClick={(e) => this.props.clearList(e)}>Clear</button>
            </div>
        )

    }
}