import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientsList extends Component {
    render() {
        let allIngredients = this.props.ingredients.map((ingredient) => {
          return(  
            <li onClick={this.props.add}>
                <Ingredient ingredient={ingredient} /> 
            </li>
          )
        })

        return (
            <div>
                <section className = 'pane'>
                    <h3>Ingredients List</h3>
                    <ul className = 'ingeredients-list'>
                        {allIngredients}
                    </ul>
                </section>
            </div>
        )
    }
}