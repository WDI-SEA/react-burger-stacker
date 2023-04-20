import React, { Component } from 'react'

export default class Ingredient extends Component {
    
    handleClick = () => {
        this.props.onAddIngredient(this.props.item)
    }
    
    render() {
        return(
            <div>
                <button onClick={this.handleClick} >{this.props.item}</button>
            </div>
        )
    }
}