import React, { useState } from "react";
import Ingredients from "./Ingredients";

// this definition of Ingredients is a function
// it can take parameters, like normal functions in JS
// all parameters that are passed to a component function are in an object
// we usually call that object props
// if props is an object that takes key value pairs, how would we access its data?
const IngredientList = (props) => {
    console.log(props)
    return (
        <div className="ingredients">
            <ul className="foods">
                {/* render ingredients in ingredient list
                saves time if I can render the place closer to whatever component 
                is going to be managing that data 
                - if I have a click event and need to pass data to a parent component,
                I'm going to take advantage of proximity */}
                {props.ingredients.map(ingredient => {
                    return (
                        <li className="food-container" onClick={(e) => props.action(e)}>
                            <Ingredients ingredient={ingredient.name} />
                            {/* might need to move this button to somewhere else */}
                        </li>
                    )
                })}   
            </ul>
        </div>
    )
}

export default IngredientList;


