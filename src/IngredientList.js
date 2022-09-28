import Ingredient from "./Ingredient";

function IngredientList(props) {
    const ingredientComponents = props.ingredientArray.map((ingredient, index) => {
        return (
            <Ingredient 
                ingredient={ingredient}
                key={`ingredient-${index}`}
                handleIngredientClick={props.handleIngredientClick}
            />
        );
    })
    return (
        <div>
            {ingredientComponents}
        </div>
    );
}

export default IngredientList;
