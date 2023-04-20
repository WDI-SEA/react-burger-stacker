import React, { Component } from "react";

export default class Ingredients extends Component {
    render(){
        const { ingredient } = this.props;
        return(
            <>
                <li name="{ingredient.name}" onClick={this.props.handleIngredientClick}>{ingredient.name}</li>
            </>
        )
    }
}