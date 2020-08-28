import React from "react"
import Ingredients from "./ingredients"

function IngredientList(props){
    return (
        <div>
            {/* map over ingredient list and display an ingredient component for eact ingredient */}
            {props.ingredients.map((ing, index)=> {
                <Ingredients key={`in-${index}`} name={ing.name} color={ing.color} stackBurger={props.stackBurger} />
            })}
        </div>
    )
}

export default IngredientList
