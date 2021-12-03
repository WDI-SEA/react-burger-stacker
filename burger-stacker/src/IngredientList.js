import React, { Component } from 'react'
import './ListContainer.css'

export default class IngredientList extends Component {

    state = {
        ingredientsArray: this.props.ingredients
    }

    render () {
        const allIngredients = this.props.ingredients.map((ingredient) =>{
            return (
              <div className="ingredient-row">
                <h1>{ingredient.name}</h1>
                <button onClick={(e) => this.props.addIngredient(e, ingredient.name)}>add</button>
              </div>
            ) 
          })

        return (
            <div className='ingredient-list'>
            <h1>ingredients:</h1>
            <form>
            <ul>{allIngredients}</ul>
            </form>
            </div>
        )
    }
}