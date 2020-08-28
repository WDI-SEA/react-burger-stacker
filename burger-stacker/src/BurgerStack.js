import React from "react";
import Ingredients from "./ingredients";

function BurgerStack(props){
    return(
        <div>
            {props.stack.map((ing, index) => {
                return <Ingredients key={`in-${index}`} name={ing.name} color={ing.color} />
            })}
        </div>
    )
}

export default BurgerStack;