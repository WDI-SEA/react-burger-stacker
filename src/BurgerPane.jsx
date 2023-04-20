import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return(
            <div>
                <BurgerStack />
                <button>Clear Burger</button>
            </div>
        )
    }
}