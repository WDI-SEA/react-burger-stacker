// Ingredient is a child of IngredientList
// gets the props of an individual ingredient, color and name

const Ingredient = props => {
    return (
        <p style={{backgroundColor: props.ingredient.color}}>
            {props.ingredient.name}
        </p>
    )
}

export default Ingredient