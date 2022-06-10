import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
	render() {
        //this.props.ingredients = [] is array
        const ingredients = this.props.ingredients.map(ingredient => {
            return(

                <Ingredient
                ingredient={ingredient}
                handleIngredientClick={this.props.handleIngredientClick}
                />
                )
        })
		return (
            <div id="app-container">
                <h1>IngredientList</h1>
                {ingredients}
            </div>
        )

    }
}