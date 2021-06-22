import {Component} from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component{
    // map over an array of ingredients
    // create an ingredient component for each item in the array
    
    render() {
        let ingredientComponents = this.props.ingredients.map((item) => (
            <li onClick={(e) => this.props.addToBurger(e)}>
                <Ingredients addToBurger={this.props.addToBurger} ingredients={item.name} color={item.color}/>
            </li>
        ))

        return(
            // render a list of those components
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}