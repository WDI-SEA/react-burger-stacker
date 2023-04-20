import React, { Component } from 'react'

export default class Ingredient extends Component {
    
    handleClick = () => {
        this.props.onAddIngredient({
            name: this.props.item,
            color: this.props.color
        })
    }
    
    render() {
        return(
            <div>
                <button onClick={this.handleClick} style={{ backgroundColor: this.props.color}} >{this.props.item}</button>
            </div>
        )
    }
}