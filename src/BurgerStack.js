import React, { Component } from 'react';
import Ingredients from './Ingredients';

class BurgerStack extends Component {
    render() {
        let allIngredients = this.props.ingredients.map((ingredient) => {
            return(
                <Ingredients ingredients={ingredient} />
            )
        })

        return (
            <div className="stack">
                {allIngredients}
            </div>
        )
    }
}

export default BurgerStack;