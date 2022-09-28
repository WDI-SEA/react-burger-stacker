import BurgerIngredient from "./BurgerIngredient";

function BurgerStack(props) {
    const burger = props.burgerArray.map((ingredient, index) => {
        return (
            <BurgerIngredient 
                ingredient={ingredient}
                key={`ingredient-${index}`}
            />
        );
    })
    return (
        <div>
            {burger}
        </div>
    );
}

export default BurgerStack;
