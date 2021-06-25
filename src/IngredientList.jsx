import React from 'react'
import Ingredient from './Ingredient.jsx'


const IngredientList = (props) => {
    // map over an array of ingredients
    // create an ingredient component for each item in the array

      let ingredientComponents = props.ingredients.map((item, index) => (
          <li onClick={(e) => props.addToBurger(e)} key={index}>
          <Ingredient addToBurger={props.addToBurger} ingredient={item.name} color={item.color} />
         </li>
         
        ))
       
        return(
            // render a list of those components
            <ul>
                {ingredientComponents}
            </ul>
        )
        
}

export default IngredientList