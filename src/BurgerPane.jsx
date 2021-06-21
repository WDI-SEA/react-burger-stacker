import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <p>Hello from BurgerPane.jsx</p>
                <BurgerStack ingredients={ this.props.ingredients }/>
                <ClearBurger />
            </div>
        )
    }
}