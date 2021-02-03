import React, { Component } from 'react';
import Ingredient from './Ingredients';

class IngredientList extends Component {
    render() {
        let allIngredients = this.props.ingredients.map((ingredient) => {
            return (
                <li onClick={this.props.addItem}><Ingredient ingredient={ingredient} /></li>
            )
        })
        return (
            <div>
                <ul>
                    {allIngredients}
                </ul>
            </div>
        )
    }
};

export default IngredientList;