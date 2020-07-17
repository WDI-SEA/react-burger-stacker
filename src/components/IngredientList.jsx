import React from 'react';
import Ingredients from './Ingredients'


const IngredientList = (props) => {


    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                        <li onClick={(e) => props.action(e)}>
                            <Ingredients ingredient={ingredient.name} />
                        </li>
                )})}
            </ul>
        </div>
    )
}


export default IngredientList