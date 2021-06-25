  

import React from 'react'
import Ingredient from './Ingredient'


export default function IngredientList (props) {
	
    // map over array of ingredients
	// create ingredient component for each array item

	
		let ingredientComponents = props.ingredients.map(item => (
			<li onClick={(e) => props.addToBurger(e)}>
				<Ingredient ingredient={item.name} color={item.color} />
			</li>
		))

		return (
			<ul>
				{ingredientComponents}
			</ul>
		)
	
}