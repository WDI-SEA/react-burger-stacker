import React, { Component } from "react";

export default class BurgerPane extends Component {
    render(){
        let stackedBurgerIngredients = this.props.stackedBurger.map((ingredient, i) => (
            <li 
            style={{ backgroundColor: ingredient.color }}
            >{ingredient.name}</li>
        ))
        return(
            <>
            <ul>{stackedBurgerIngredients.reverse()}</ul>
            </>
        )
    }
}