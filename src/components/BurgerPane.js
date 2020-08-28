import React from 'react'

function BurgerPane(props) {
    let value = props.body.split(',')
    return(
        <li style={{background: value[1]}}>{value[0]} <button value={props.body} onClick={props.removeFromBurger}>-</button></li>
    )
}

export default BurgerPane;