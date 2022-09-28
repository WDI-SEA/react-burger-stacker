import React, { Component } from 'react'

export default class Ingredients extends Component {
    render () {
        const styles = {
            backgroundColor: this.props.ingredient.color,
            color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black'
        }
        return (
            <div 
                style={styles}
                // * ternary statement note below
                onClick={ this.props.handleIngredientClick ?
                    () => this.props.handleIngredientClick(this.props.ingredient) :
                    () => {}
                }         
            >
                <p>{this.props.ingredient.name}</p>
            </div>
        )
    }
}


                // ternary statements = if/else
                // condition ? what to return if true : what to return if false
                // if (condition) {
                    // what to return if true
                // } else { what to return if false
                // }