import React from 'react'

const Ingredient = (props) => {
    const ingred = props.ingredients.map((ingredient, index) => {
        return(
            <li key={index}>
            <button style={{backgroundColor: ingredient.color}} onClick={()=>{props.handleClick(index)}}>
            {ingredient.name}
            </button>
            </li> 
            
        ) 
    })
    return(
    <ul>{ingred}</ul>
    )
}



export default Ingredient