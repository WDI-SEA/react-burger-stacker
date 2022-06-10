import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            return <Ingredients 
            item={item}
            i={i} 
            handleAddToStack={this.props.handleAddToStack} />
        })
        return (
            <>
                <h2>IngredientList</h2>

                {listToRender}
            </>
        )
    }
}

export default IngredientList