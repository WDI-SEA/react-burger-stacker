import React from "react";

const Ingredients = (props) => {
    return (
        <div>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li className="foods">{ingredient.name}<button className="stackButton">Stack me!</button></li>
                ))}
            </ul>
    </div>
    )
}

export default Ingredients;