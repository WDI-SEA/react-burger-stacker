import Ingredient from './Ingredient'

const BurgerStack = (props) => {
    let ingredients = props.ingredients.reverse().map((item,index) => (
        <li>
            <Ingredient ingredient={item.name} color={item.color} key={ index }/>
        </li>
    ))

    return (
        <ul>
            {ingredients}
        </ul>
    )
}

export default BurgerStack