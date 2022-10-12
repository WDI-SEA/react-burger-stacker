import Ingredient from './Ingredient'

export default function BurgerStack(props){
        const ingredientComponents = props.clickedIngredients.map((item, i) => {
            return (
                <Ingredient 
                    ingredient={item}
                    key={`burgerlist-ingredient${i}`}
                />
            )
        })

        return (
            <div>
                {ingredientComponents}
            </div>
        )
    
}

// ternary statements = if/else
// condition ? what to return if true : what to return if false
// if (condition) {
    // what to return if true
// } else {
    // what to return if false
// }