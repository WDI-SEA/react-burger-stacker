import React, {Component} from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {

    state = {
        burgerToDisplay: this.props.burger
    }

    render() {
        return (
            <h1>hi</h1>
        )
    }
}

export default BurgerPane