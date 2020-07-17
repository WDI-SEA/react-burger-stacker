import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    return (
        <div className='burger-pane'>
            <h4>BurgerPane</h4>
            <BurgerStack addedIngredients={props.addedIngredients} />
            <ClearBurger clearIngredients={props.clearIngredients} />
        </div>
    )
}

export default BurgerPane