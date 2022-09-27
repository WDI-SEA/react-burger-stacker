import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        const styles = {
            backgroundColor: this.props.ingredient.color,
            color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black'
        }

        return (
            <p style={styles}>
                {this.props.ingredient.name}
            </p>
        )
    }
}