import React from 'react'




const BurgerPane = (props) => {
    console.log(props.ing)
    const burgerIngredients = props.ing.map((ingredient, index) => {
        return(
            <li key={index}>
            <button style={{backgroundColor: ingredient.color}} onClick={()=>{props.handleClick(index)}}>
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