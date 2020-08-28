import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) =>{
    let selectedIngredient = props.ingredients.map((ingredient, id) => 
    <li key={id} style={{backgroundColor:ingredient.color}} >{ingredient.name}  
    <button name={ingredient.name} onClick={(e) => props.action(e)}> add</button></li>)
    return(
        <div className="ingredientList">
            <div>Menu Items: </div>
            <li>
                
                {selectedIngredient}
            </li> 
            
        </div>
    )
}

export default IngredientList