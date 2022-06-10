import React, { Component } from 'react'

export default class Ingredient extends Component {
    
    render() {
        return (
            <div id="app-container">
                <div class="ingredient-container" style={{ backgroundColor: `${this.props.ingredient.color}` }}
                onClick={()=>this.props.handleIngredientClick(`${this.props.ingredient}`)}
                >
                    <p >{this.props.ingredient.name}</p>
                
               </div>

            </div>
        )

    }
}

