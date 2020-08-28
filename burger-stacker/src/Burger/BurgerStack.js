import React, {Component} from 'react';
import Ingredients from '../Ingredients/Ingredients'
import ingredientsList from '../Ingredients/IngredientsList'

class BurgerStack extends Component {

    state = {
        burgerArray: []
    }

    render() {
        return (
            <div>
                <li style="font:{this.props.doThis.color}">{this.props.doThis.name}</li>
            </div>
        )
    }
}

export default BurgerStack