import React, {Component} from "react";

export default class Ingredient extends Component {
    render() {
        return(
            <>
                <h1 onClick={() => this.props.handleIngredientClick(this.props.ingredient)} style={{backgroundColor:this.props.ingredient.color}}>{this.props.ingredient.name}</h1>
            </>
        )
    }
}