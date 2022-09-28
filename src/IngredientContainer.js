import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";

function IngredientContainer(props) {
    return (
        <div className="flex flex-col items-center">
            <IngredientList 
                ingredientArray={props.ingredientArray}
                handleIngredientClick={props.handleIngredientClick}
            />
            <IngredientForm handleAddIngredient={props.handleAddIngredient} />
        </div>
    );
}

export default IngredientContainer;
