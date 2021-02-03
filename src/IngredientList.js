import React, { Component } from 'react';
import Ingredient from './Ingredients';

class IngredientList extends Component {
    render() {
        let allIngredients = this.props.ingredients.map((ingredient) => {
            return (
                <div>
                    <button onClick={this.props.addItem}><Ingredient ingredient={ingredient} /></button></div>
            )
        })
        return (
            <div>
                {allIngredients}
            </div>
        )
    }
};

export default IngredientList;