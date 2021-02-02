import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() {
        return (
            <div>
                <Ingredients ingredients={this.props.ingredient.name} />
            </div>
        )
    }
}

export default IngredientList