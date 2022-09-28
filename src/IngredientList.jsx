import Ingredient from './Ingredient'


function IngredientList(props) {
   
        const ingredientComponents = props.ingredients.map((item, i) => {
            return (
                <Ingredient 
                    // pass in the click event handler
                    ingredient={item}
                    setIngredients={props.setIngredients}
                    key={`ingredient-list-${i}`}
                />
            )
        })

        // ingredientComponents.push(<Ingredient ingredient={{ name: 'American Cheese', color: 'yellow' }} key={`ingrediant-list${ingredientComponents.length}`}  />)

        return (
            <div>
                {ingredientComponents}
            </div>
        )
    }


export default IngredientList;