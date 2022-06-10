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
            <div className="cols-start-1" >
                <h2 className="text-xl row-start-2" >IngredientList</h2>

                {listToRender}
            </div>
        )
    }
}

export default IngredientList