import Ingredients from './Ingredients'

  
const BurgerStack = (props) => {
    let burgerIngredients = props.clickedIngredients.reverse().map((item) => (
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

export default BurgerStack