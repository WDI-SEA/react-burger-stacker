import React, {Component} from 'react';

import Ingredients from './Ingredients.js'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            return <Ingredients 
                item={item}
                i={i}
                key={"ingredient"+i}
                handleAddToStack={this.props.handleAddToStack}
            />
        })
        return(
            <>
                   <h2>Ingredient List</h2> 
                   {listToRender}
            </>
        )
    }
}