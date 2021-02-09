import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() {
        // console.log(this.props.ingredient)
        let allIngredients = this.props.ingredient.map((ingredient) => {
            return(
            <li onClick={this.props.addIngredient}>
                <Ingredients ingredients={ingredient} />
            </li>
            )
        })

        return (
            <div class="ingredsList">
                {allIngredients}
            </div>
        )
    }
}

export default IngredientList