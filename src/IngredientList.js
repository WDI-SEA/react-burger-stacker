import React, { Component } from 'react';
import Buns from './Buns';
import Patties from './Patties';
import Toppings from './Toppings';

class IngredientList extends Component {
    constructor(props) {
        super()
    }
    render() {
        // console.log(Buns.state.bunsList, 'bun bun bun')
        // console.log(this.props,  "what is this??? =======")
        return (
            <div className="IngredientList">
                <h3>Buns:</h3>
                <Buns buns={this.props.ingredient.buns} updateIngredient={this.props.updateIngredient}/>
                <h3>Patties:</h3>
                <Patties patties={this.props.ingredient.patties} updateIngredient={this.props.updateIngredient}/>
                <h3>Toppings:</h3>
                <Toppings toppings={this.props.ingredient.toppings} updateIngredient={this.props.updateIngredient}/>
            </div>
        )
    }
}

export default IngredientList;