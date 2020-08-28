import React from 'react'

const StackArea = (props) => {

    const ingredients = props.burger.map((ingredient, i) => {
        return <li key={i} style={{background: ingredient.color}}>{ingredient.name}</li>
    })

    return(
        
        <div className="container">
            <h2>Stackin' Area</h2>
            <ul> {ingredients} </ul>
            <button onClick={props.undo}>Undo Garbage</button>
            <button onClick={props.onClick}>Trash Burger</button>
        </div>
    )
}

export default StackArea