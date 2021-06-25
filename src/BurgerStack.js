import React  from 'react'
import Ingredient from './Ingredient'

export default function BurgerStack (props) {
        const burgerIngredients = props.clickedIngredients.map ((item => 
        
            <li>
                <Ingredient ingredient={item.name} color={item.color} />
            </li>

        ))
        
        return (
            <ul>
                {burgerIngredients.reverse()}
            </ul>
        )
    }

    // export default class BurgerStack extends Component {
    //     render() {
    //         const burgerIngredients = this.props.clickedIngredients.map((item) => (
    //             <li>
    //                 <Ingredient ingredient={item.name} color={item.color} />
    //             </li>
    //         ))
            
    //         return (
    //             <ul>
    //                 {burgerIngredients.reverse()}
    //             </ul>
    //         )
    //     }
    // }