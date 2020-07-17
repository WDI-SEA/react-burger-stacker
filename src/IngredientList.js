import React, { useState } from 'react'
import BurgerPane from './BurgerPane'

const IngredientList = (props) => {

    const [addedIngredients, setAdd] = useState([])

    const handleAddClick = (i) => {
        setAdd([i.name, ...addedIngredients])
        console.log(addedIngredients)
    }

    return (
        <div>
            <ul>
                <h1>Ingredients</h1>
                {props.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name} <button onClick={() => handleAddClick(ingredient) }>Add</button> </li>)}
            </ul>
            <div>
                <BurgerPane ingredients={addedIngredients}/>
            </div>
        </div>   
    )   
}

export default IngredientList