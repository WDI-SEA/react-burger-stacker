import React from 'react'
import BurgerStack from './BurgerStack'

function BurgerPane(props) {
    return (
        <div className="BurgerPane">
            <h1>Burger Pane:</h1>
            <div>
                <BurgerStack addedIngredients={props.addedIngredients} />
            </div>
            <button onClick={props.resetIngredients} >Reset</button>
        </div>
    )
}

export default BurgerPane