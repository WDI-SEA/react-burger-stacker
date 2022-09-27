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
                <BurgerStack
                    ingredients={this.props.ingredients}
                />

                <ClearBurger
                
                />

            </div>
        )
    }
}