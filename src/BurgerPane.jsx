import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return(
            <div>
                <BurgerStack />
                <button onClick={this.props.onClearBurger} >Clear Burger</button>
            </div>
        )
    }
}