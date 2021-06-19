import {Component} from "react"
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    
    render() {
    
        let ingredientComponents = this.props.ingredients.map(item => (
            <li>
                <Ingredient ingredients={item.name} color={item.color}/>
            </li>
        ))
    
        return(
            
            <ul>
                {ingredientComponents}

            </ul>
            
            

        )
    }
}
