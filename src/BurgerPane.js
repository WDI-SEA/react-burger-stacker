import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack ingredients={this.props.ingredients} />
                <ClearBurger clearBurger={this.props.clearBurger} />
            </div>
        )
    }
}