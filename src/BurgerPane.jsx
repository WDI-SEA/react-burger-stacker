import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {

    // state = {
    //     burgerStack: []
    //   }

    render(){
        return (
            <div>
                (Burger Pane)
                <p>{this.props.burgerStack}</p>
                <BurgerStack
                    burgerStack={this.props.burgerStack}
                    ingredients={this.props.ingredients}
                />

                <ClearBurger
                    clearBorger={this.props.clearBorger}
                />

            </div>
        )
    }
}