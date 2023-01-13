import React, { Component } from "react";
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            <Ingredient 
                item={item}
                i={i}
                key={'ingred'+1}
                handleAddToStack={this.props.handleAddToStack}
            />
        })
        return (
            <>
            <h2>Ingredient List</h2> 
            {listToRender}
            </>
        )
    }
}