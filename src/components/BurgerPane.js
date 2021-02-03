import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';


class BurgerPane extends Component {
    // constructor(props){
    //     super(props)
    //     // this.props.burgerIngredients = this.props.burgerIngredients.bind(this)
    // }
    render() {
        return (
            <div id="burgerpane">
                <h1>Burger Pane</h1>
                <BurgerStack burgerStuff={this.props.burgerIngredients} />
                <ClearBurger clearBurger={this.props.clearBurger} />
            </div>
        )
    }
}

export default BurgerPane;