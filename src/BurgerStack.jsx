import React, { useState } from "react";
import Ingredients from "./Ingredients";

const BurgerStack = (props) => {
    return(
        <div className="foodStack">
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                        <li>
                            <Ingredients ingredient={ingredient} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BurgerStack;