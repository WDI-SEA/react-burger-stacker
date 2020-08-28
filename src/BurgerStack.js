import React from 'react'


const BurgerStack = (props) => {
    return (
        <div>
            <ul>
                {props.chosenIngredients.map((ingredients, i) => (
                    <li key={i} className="bubger"><img style={{zIndex: i}} src={ingredients.image}/></li>
                ))}
                
            </ul>
        </div>
    )
}

export default BurgerStack