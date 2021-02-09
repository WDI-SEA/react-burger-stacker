import Ingredient from './Ingredient'

function IngredientList(props){
    let ingredientComponents = props.ingredients.map((item, i) => (
        <li onClick={(e) => props.addToBurger(e)}>
            <Ingredient addToBurger={props.addToBurger} ingredient={item.name} />
        </li>
    ))
    return(
        <ul>
            {ingredientComponents}
        </ul>
    )
}

export default IngredientList