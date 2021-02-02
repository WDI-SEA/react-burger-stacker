import React, { Component } from 'react';
import Buns from './Buns';
import Patties from './Patties';
import Toppings from './Toppings';

class IngredientList extends Component {
    render() {
        console.log(this.props,  "what is this??? =======")
        return (
            <div className="IngredientList">
                <h3>Buns:</h3>
                <Buns buns={this.props.ingredient.buns} />
                <h3>Patties:</h3>
                <Patties patties={this.props.ingredient.patties} />
                <h3>Toppings:</h3>
                <Toppings toppings={this.props.ingredient.toppings} />
            </div>
        )
    }
}

export default IngredientList;