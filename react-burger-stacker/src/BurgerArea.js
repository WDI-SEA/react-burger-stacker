import React from 'react'

function BurgerArea(props) {
    const ingredients = props.ingredients.map((ingredient,i)=>{
        return <li  key={i} style={{background: ingredient.color}}>{ingredient.name}</li>
    })

    return(
        <div>
            <ul>
            {ingredients}
            </ul>
            <button onClick={props.emptyArray}>Clear Selection</button>
            <button onClick={props.undoLast}>Erase Last</button>
        </div>
    )

}

export default BurgerArea
