import React from 'react'
import Ingredient from './Ingredient'

export default function BurgerStack(props) {
    return (
        <>
        <ul className="bulletpoint">
        {props.ingredients.map(ingredient =>{
            return (
               <li>
                   <Ingredient ingredient={ingredient} />
               </li> 
            )
        })}
        </ul>
        </>
    )
}