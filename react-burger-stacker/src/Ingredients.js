import React from 'react'


function Ingredients(props) {
    return(
        <ul>
            {props.ingredients.map((ingredient, i)=>(
                <div>
                    <li key={i} style={{backgroundColor: ingredient.color}}>{ingredient.name} </li>
                    <button onClick={(e) => {
                        props.onClick(e, ingredient)
                    }}>Add</button>
                </div>
            ))}
        </ul>    
    )
}

export default Ingredients