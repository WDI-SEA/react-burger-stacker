  

import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {
	
    // map over array of ingredients
	// create ingredient component for each array item

	render(){
		let ingredientComponents = this.props.ingredients.map(item => (
			<li onClick={(e) => this.props.addToBurger(e)}>
				<Ingredient ingredient={item.name} color={item.color} />
			</li>
		))

		return (
			<ul>
				{ingredientComponents}
			</ul>
		)
	}
}