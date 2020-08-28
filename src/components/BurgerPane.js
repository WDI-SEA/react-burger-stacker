import React from 'react'




const BurgerPane = (props) => {
    const burgerIngredients = props.ing.map((ingredient, index) => {
        return(
            <li key={index}>
            <button onClick={()=>{props.handleClick(index)}}>
            {ingredient.name}
            </button>
            </li> 
            
        ) 
    })
    return(
        <div>
            
            Burger Stacking Area
            <ul>
                {burgerIngredients}
            </ul>
        </div>
    ) 
}



export default BurgerPane