import React, { useState } from 'react'
import Ingredient from './Ingredient.js'


const Stack = props => {

    


    console.log('props.stackedItems: ', props.stackedItems)
    let burger = props.stackedItems.map((item, i) => {
        return(
            <Ingredient ing={item} index={i}/>
        )
    })

    console.log('burger:', burger)
    return(
        <>
            <div id="burger">
                {burger}
            </div>
            <button id="clearButton" onClick={props.clearStack}>Clear Burger</button>
        </>
    )
}

export default Stack