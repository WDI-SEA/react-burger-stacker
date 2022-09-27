import React, {Component} from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack burgerArray={this.props.burgerArray} />
                <ClearBurger handleBurgerClear={this.props.handleBurgerClear} />
            </div>
        )
    }
}