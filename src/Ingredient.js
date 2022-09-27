import React, { Component } from "react";

export default class Ingredient extends Component {
    render() {
        const myStyle = {backgroundColor: this.props.ingredient.color}
        return (
            <span style={myStyle}>{this.props.ingredient.name}</span>
        )
    }
}