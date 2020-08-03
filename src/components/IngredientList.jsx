import React from 'react';
import Ingredients from './Ingredients'


const IngredientList = (props) => {


    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                        <li id={ingredient} onClick={(e) => props.action(e)}>
                            <Ingredients ingredient={ingredient} />
                        </li>
                )})}
            </ul>
          
        </div>
    )
}


export default IngredientList