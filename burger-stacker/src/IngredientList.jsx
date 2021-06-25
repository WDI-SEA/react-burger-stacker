import React from 'react'
import Ingredients from './Ingredients'

const IngredientList = (props) => {
        const ingredients = props.ingredientData.map(item => (
            <li onClick={(e) => props.addToBurger(e)}>
                <Ingredients ingredients={item.name} color={item.color} />
            </li>
        ))
            // return <IngredientList 
            // name={ingredient.name}
            // color={ingredient.color}
            // key={index}
            // />
            return (
                <ul>
                {ingredients}
                </ul>
            )
}
  
export default IngredientList;
      
    // <form action="./IngredientList" method="post">
    // <label for="Ingredients">Ingredients</label>
    // <hidden input="ingredient_name" type="text" name="" value="">
    // <input type="submit" value="Add to Ingredients ">
    // </form>
        