import React from 'react'
import Stack from './Stack'

function BurgerPane(props) {
    return(
        <div class="burgerpane">
            <h5>Burger Pane</h5>
            <Stack burgerPane={props.burgerPane} onClick={props.onClick} clearClick={props.clearClick} />
        </div>
    )
}
export default BurgerPane