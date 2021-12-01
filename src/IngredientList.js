import React, { Component } from 'react'


export default class IngredientList extends Component {

    render () {
       let allIngredients = this.props.ingredients.map((ingredient, i) => {
           return (
               <li>{ingredient.name}</li>
           )
       })
        
        return (
            <div className="ingredient-List">
             
               <ul>
                   {allIngredients}
               </ul>
            </div>
        )
    }
}