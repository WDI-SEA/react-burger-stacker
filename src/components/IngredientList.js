import React from 'react';

function IngredientList(props) {
    let value = `${props.body.name},${props.body.color}`

    return(
        <li style={{background: props.body.color}}> {props.body.name} <button value={value} onClick={props.addToBurger}>+</button></li>
    )
}

export default IngredientList;