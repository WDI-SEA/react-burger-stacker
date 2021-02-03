import React, { Component } from 'react';
import ClearBurger from './ClearBurger';
import Ingredient from './Ingredients';


class BurgerPane extends Component {
    constructor(props){
        super(props)
        // this.props.burgerIngredients = this.props.burgerIngredients.bind(this)
    }
    render() {
        console.log(`🎃🎃🎃🎃🎃🎃🎃 ${this.props.burgerIngredients}`)

        return (
            <div id="burgerpane">
                <h1>Burger Pane</h1>
            {/* {this.props.burgerIngredients.map((ingredient) => {
        // <Ingredient ingredient={ingredient} />
        {this.props.burgerIngredients.name}
    })} */}
                {this.props.burgerIngredients.name}
                {/* {selectedIngredients} */}
                <ClearBurger clearBurger={this.props.clearBurger} />
            </div>
        )
    }
}

export default BurgerPane;