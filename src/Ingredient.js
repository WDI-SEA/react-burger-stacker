import React, { Component } from "react"
import './App.css';


export default class Ingredient extends Component {
    render() {
        return(
            <>
                <h1 onClick={() => this.props.handleIngredientClick(this.props.ingredients)} style = {{backgroundColor:this.props.ingredient.color}}>{this.props.ingredient.name}</h1>
                {/* <p>{this.props.color}</p> */}
            </>
        )
    }
}