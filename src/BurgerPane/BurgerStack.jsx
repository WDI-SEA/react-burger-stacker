import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import ClearBurger from './ClearBurger';

const BurgerStack = (props) => {
    const ingredients = props.burgerIngredients.map((ingredient, index) => {
        return <BurgerIngredient ingredient={ingredient} index={index} />
    })
    //const stackStyle = {width: 300}
    // better to just create a style with centering in css and apply to div with the appropriate name

    return (
        <div className="burger-stack">
            <h2>🍔 Your Burger Stack: 🍔</h2>
            <ClearBurger clearBurger={props.clearBurger }/>
            <div /*style={ stackStyle }*/>
                { ingredients }
            </div>
        </div>
    )
}

export default BurgerStack;