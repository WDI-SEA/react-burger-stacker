import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPane extends Component {
    render() {
        return (
            <div className="BurgerPane">
                <p>burger pane here</p>
                <BurgerStack />
                <ClearBurger />
            </div>
        )
    }
}

export default BurgerPane;