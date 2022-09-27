import React, { Component } from 'react'
import ClearBurger from './ClearBurger'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack 
                  clickedIngredients={this.props.clickedIngredients}
                />

                <ClearBurger
                  handleBurgerClear={this.props.handleBurgerClear}
                />
            </div>
        )
    }
}