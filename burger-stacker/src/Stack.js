import React, {Component} from 'react'

const Stack = props => {

    console.log('stackedItems: ', props.stackedItems)
    let burger = props.stackedItems.map((item) => {
        return(
        <div style={{backgroundColor: item.color } }>
            <h1>{item.name}</h1>
        </div>
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