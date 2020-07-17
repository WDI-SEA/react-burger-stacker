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
            <Ingredients ingredients={props.ingredients}/>
        </div>
    )
}

export default IngredientList;