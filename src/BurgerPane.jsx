import React, {Component} from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack clickedIngredients={this.props.clickedIngredients} />
                <ClearBurger clearBurger={this.props.clearBurger} />
            </div>
        )
    }
}

export default BurgerPane