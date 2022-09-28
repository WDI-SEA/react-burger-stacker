function Ingredient(props) {
    return (
        <div style={{backgroundColor: props.ingredient.color, color: props.ingredient.color === "#3F250B" ? "white" : "black"}} 
            onClick={() => props.handleIngredientClick(props.ingredient)}
            className="mt-1 px-2 py-1 rounded text-center select-none hover:cursor-pointer">
            {props.ingredient.name}
        </div>
    );
}

export default Ingredient;
