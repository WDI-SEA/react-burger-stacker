import React, { Component } from 'react';
import Ingredient from './Ingredient'

class IngredientList extends Component {
    handleAddIngredient = (e) => {
        // e.preventDefault()
        console.log('Clicking the ingredient to add')
        this.setState({
            burgerStack: []
        })
    }

    render() { 
        const ingredientList = this.props.ingredients.map((ingredient, index) => {
            return <li className='border' key={`ingredientitem-${index}`}>{ingredient.name}</li>
        })
        return (
            <>
                <div onClick={this.handleAddIngredient} className='border'>
                    <h1>Ingredient List</h1>
                    <h4 className='center'>Click Ingredient To Add</h4>
                    <ul>
                        <Ingredient ingredientList={ingredientList} />
                    </ul>
                </div>
            </>
        );
    }
}
 
export default IngredientList;