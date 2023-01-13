import React, {Component} from "react";

export default class Ingredient extends Component {
    render() {

        return (
            <>
                <div className="burgerDiv" onClick={()=>{this.props.handleAddIngredient(this.props.ingredient.name)}} >{this.props.ingredient.name}</div>
            </>
        )
    }
}