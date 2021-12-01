import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {

    render () {
       
        
        return (
            <div className="ingredient-List">
               <Ingredient />
            </div>
        )
    }
}