import React from 'react'


function BurgerIngredients(props) {
    return(
        <div className="BurgerIngredients">
            {props.addedIngredients.map( (ingredient, key) => 
                <div key={key}>{ingredient.name}</div>
            )}
        </div>
    )
}



export default BurgerIngredients