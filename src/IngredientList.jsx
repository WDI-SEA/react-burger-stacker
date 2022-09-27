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
            <div>
                <h2>Ingredients</h2>

                <div className='ingredient-list'>
                    {ingredientsList}
                </div>

                <form>
                    <label htmlFor='name'>New Ingredient:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={this.props.name}
                        onChange={e => this.props.handleChange(e)}
                    />

                    <label htmlFor='color'>BG Color:</label>
                    <input
                        type='text'
                        id='color'
                        name='color'
                        value={this.props.color}
                        onChange={e => this.props.handleChange(e)}
                    />

                    <button
                        type='submit'
                        onClick={this.props.newIngredient}    
                    >
                        Add Ingredient!
                    </button>
                </form>
            </div>
        )
    }
}