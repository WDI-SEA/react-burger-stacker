import Ingredients from './Ingredients'

const IngredientList = (props) => {
    // map over an array of ingredients
    // create an ingredient component for each item in the array
    let ingredientComponents = props.ingredients.map((item) => (
        <li onClick={(e) => props.addToBurger(e)}>
            <Ingredients addToBurger={props.addToBurger} ingredients={item.name} color={item.color}/>
        </li>
    ))

    return(
        // render a list of those components
        <ul>
            {ingredientComponents}
        </ul>
    )
}

export default IngredientList