import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import Clear from './Clear'

export default class BurgerPlate extends Component {
    render() {
        return (
            <div>
                <h3>Build Your Burger!</h3>
                <BurgerStack />
                <Clear />
            </div>
        )
    }
}