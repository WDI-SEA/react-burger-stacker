import React, { Component } from 'react'

import Burger from './Burger'

export default class BurgerPane extends Component {
    render() {


        return (
            <div>
                <h1>Choose ingrdients</h1>
                
                <Burger burgerIngredients={this.props.burgerIngredients} />
                <button onClick={this.props.onClick}>
                    clear
                </button>
            </div>
        )
    }
}
