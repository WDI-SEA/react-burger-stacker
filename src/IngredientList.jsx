import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {

    render() {

        const allIngredients = this.props.ingredients.map((ingredient, i) => {
            if (ingredient){
                return (
                    
                    <div key={`ingredient${i}`}>
                        <ul>
                            <li>
                                <Ingredients
                                    addIngredient={this.props.addIngredient} 
                                    ingredient={ingredient}
                                />
                            </li>
                        </ul>
                    </div>
                )
            }
        })
    
        console.log(this.props.ingredients)
        return (
            <div>
                {allIngredients}
            </div>
        )
    }
}