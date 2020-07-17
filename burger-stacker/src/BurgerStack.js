import React from 'react'
import AddedIngredients from './AddedIngredients'

const BurgerStack = (props) => {
    return (
            <div>
                <h4>BurgerStack</h4>
                <AddedIngredients addedIngredients={props.addedIngredients} />
            </div>
    )
}

export default BurgerStack