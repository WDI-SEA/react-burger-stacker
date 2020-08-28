import React from 'react'

const IngredientBuildBtn = (props) => {

    return (
        <button className="BuildBtn" style={{backgroundColor: `${props.color}`}} value={props.name} onClick={(e) => props.onClick(e)}>{props.name}</button>
    )
}

export default IngredientBuildBtn