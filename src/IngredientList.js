import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map(ingredient => {
            return (
                <Ingredient 
                    ingredientName={ingredient.name}
                    ingredientColor={ingredient.color}
                    // indgredient={ingredient}
                    addToBurger={this.props.addToBurger}
                />
            )
        })
        return (
            <>
                <section className='ingredient-list'>
                <h3>Ingredient List</h3>
                    {ingredients}                
                </section>
            </>
        )
    }
}

export default IngredientList