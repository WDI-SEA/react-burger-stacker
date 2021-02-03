import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        return (
            <div className="pane">
                <BurgerStack ingredients={this.props.ingredients} />
                <ClearBurger />
            </div>
        )
    }
}

export default BurgerPane;