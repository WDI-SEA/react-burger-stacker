import React, { Component} from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {
    render() {

        const listToRender = this.props.items.map((item, i) => {
            return <Ingredient 
                key={"ingred" + i}
                item={item}
                handleAddToStack={this.props.handleAddToStack}
            
            />
        })
        return (
            <>
            <h2>IngredientList</h2>
            {listToRender}
            </>
        )
    }
}