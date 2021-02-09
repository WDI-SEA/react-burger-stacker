import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div className="pane">
            <BurgerStack ingredients={props.burger} />

            <ClearBurger />
        </div>
    )
}

export default BurgerPane;