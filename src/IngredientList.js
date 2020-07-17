import React, {useState} from 'react';
import Ingredient from './Ingredients'





const Ingredients = (props) => {
   
    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                   return (
                   <li onClick={(e) => props.action(e)}>
                        <Ingredient ingredient={ingredient.name} />
                    </li>
                )})}
            </ul>
        </div>
    )

}

export default Ingredients