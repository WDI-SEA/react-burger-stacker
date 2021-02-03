import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() {
        return (
            <div class="ingredsList">
                <Ingredients ingredients={this.props.ingredient.name} addIngredient={this.props.addIngredient}/>
            </div>
        )
    }
}

export default IngredientList