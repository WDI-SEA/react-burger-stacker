import React from 'react'

const Ingredient =({ingredient, clickFunction, itemKey})=> {
       // I want to render a background color
       // I want to render a name of a ingredient
       // if there is a key with this 'name' extract it
const { name, color } = ingredient
return (
    <p
    style={{backgroundColor: color}}
    onClick={clickFunction}
    id={itemKey}
    >
        {name}
    </p>
)
}

export default Ingredient