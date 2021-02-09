import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';


class BurgerPane extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="BurgerPane">
                <p>burger pane here</p>
                <p>added items</p>
                <ul>
                    {/* add added ingredients list */}
                </ul>
                <BurgerStack burger={this.props.burger} />
                <ClearBurger clearIngredients={this.props.clearIngredients}/>
            </div>
        )
    }
}

export default BurgerPane;