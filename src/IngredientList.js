import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() {
        return (
            <div class="ingredsList">
                <Ingredients ingredients={this.props.ingredient.name} /><button type="submit">></button>
            </div>
        )
    }
}

export default IngredientList