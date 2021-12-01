import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        const currentBurgerStack = []
        return(
            <div className="container">
                Burger Pane
                <BurgerStack currentBurgerStack = { currentBurgerStack } />
                <button>Clear Burger</button>
            </div>
        )
    }
}