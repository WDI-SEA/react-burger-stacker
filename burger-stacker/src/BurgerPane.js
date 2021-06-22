import React, { Component } from 'react' 
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class burgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack clickedIngredients={this.props.clickedIngredients } />
                <ClearBurger ClearBurger={this.props.clearBurger} />
            </div>
        )
    }
}