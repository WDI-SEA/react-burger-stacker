import React, { Component } from 'react'

export default class Ingredient extends Component {
    
    render () {
        return (
            // clicky means something different when it is rendered in the burger and when it is rendered on the ingredients menu
            // it is still the same element!!
            <p style={{backgroundColor: this.props.ingredient.color}} onClick={this.props.clicky}>
                { this.props.ingredient.name }
            </p>
        )
    }
}