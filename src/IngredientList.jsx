import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {

    render() {

        const allIngredients = this.props.ingredients.map((ingredient, i) => {
            if (ingredient){
                return (
                    <ul key={`ingredient${i}`}>
                        <li>
                            <Ingredients 
                                ingredient={ingredient}
                            />
                        </li>
                    </ul>
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