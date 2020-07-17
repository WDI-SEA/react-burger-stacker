import React, {useState} from 'react';
import Ingredient from './Ingredients'





const Ingredients = (props) => {
    const [ingredient, setIngredient] = useState("all")
   
    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                   return (
                   <li>
                        <Ingredient ingredient={ingredient.name} />
                    </li>
                )})}
            </ul>
        </div>
    )

}

export default Ingredients