import React, { Component } from 'react'
import BurgerStack from '../components/BurgerStack'
import ClearBurger from '../components/ClearBurger'

export default class BurgerPane extends Component {
    render() {

        return (
            <>
                <h1>BurgerPane</h1>
                <BurgerStack pickedIngredients={this.props.pickedIngredients} />
                <ClearBurger clearBurger={this.props.clearBurger} />
            </>
        )
    }
}