import React from 'react'
import Ingredients from './Ingredients'

const BurgerStack = (props) => {
    return (
        <div>
            <ul>
                {props.ingredients.map(ingredient => {
                    return (
                        <li>
                            <Ingredients ingredient={ingredient} />
                        </li>
                )})}
            </ul>
        </div>
    )
}
export default BurgerStack