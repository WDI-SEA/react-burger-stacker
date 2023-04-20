import React, { Component } from "react";

export default class BurgerPane extends Component {
    render(){
        let stackedBurgerIngredients = this.props.stackedBurger.map((ingredient, i) => (
            <li>{ingredient.name}</li>
        ))
        return(
            <>
            <ul>{stackedBurgerIngredients.reverse()}</ul>
            </>
        )
    }
}