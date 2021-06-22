  
import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './BurgerClear'

export default class BurgerPane extends Component {
    // handle passed in props and state vals and functions

    render() {
        return (
            <div>
                <BurgerStack burgerIngredients={this.props.burgerIngredients} />
                <ClearBurger clearBurger={this.props.clearBurger} />
            </div>
        )
    }
}
