import React from 'react'

const BurgerPane = (props) => {

    return (
        <div>
            <h1>Burger Stack</h1>
            <ul>
                {props.ingredients.map((ingredient, i) => <li key={i}>{ingredient} </li>)}
                <button>Clear</button>
            </ul>
        </div>
    )
}

export default BurgerPane