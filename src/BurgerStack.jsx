import {Component} from 'react'
import Ingredients from './Ingredients'

  
export default class BurgerStack extends Component {
    render() {        
    let burgerIngredients = this.props.clickedIngredients.reverse().map((item) => (
        <li>
            <Ingredients ingredients={item.name} color={item.color} />
        </li>
    ))

        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
    }
}
