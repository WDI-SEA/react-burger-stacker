import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    state = {
        ingredientStuff: this.props.ingredientsBook
    }
    render() {
        
        return(
            <div className="container">
                Ingredients List:
                <Ingredients ingredientsToShow = {this.state.ingredientStuff}/>
            </div>
        )

    }
}