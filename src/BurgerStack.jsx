import {Component} from 'react'
import IngredientList from './IngredientList'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component{
    render(){
        return(
            <div>
                <p>
                    {this.props.addOnBurger}
                </p>
            </div>
        )
    }
}