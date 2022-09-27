import React, { Component } from 'react'

export default class Ingredients extends Component {

    // console.log(this.props.ingredient.name)


    render() {
        
        if (this.props.ingredient) {
            return (
                <div style={{ backgroundColor: this.props.ingredient.color }} onClick={(e) => this.props.addIngredient(e)}>
                    {this.props.ingredient.name}
                </div>
            )

        }
    }
}