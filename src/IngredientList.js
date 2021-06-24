import Ingredient from './Ingredient'

const IngredientList = (props) => {

    let ingredientComponents = props.ingredients.map((item, index) => (
        <li onClick={(e) => props.addToBurger(e)}>
            <Ingredient ingredient={item.name} color={item.color} key={ index } />
        </li>
    ))

    return (
        // render a list of those components     
        <ul>
            {ingredientComponents}
        </ul>
    )
}

export default IngredientList