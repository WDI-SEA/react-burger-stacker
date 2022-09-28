function BurgerIngredient(props) {
    return (
        <div style={{backgroundColor: props.ingredient.color, color: props.ingredient.color === "#3F250B" ? "white" : "black"}}
            className="mt-1 px-2 py-1 rounded text-center select-none">
            {props.ingredient.name}
        </div>
    );
}

export default BurgerIngredient;
