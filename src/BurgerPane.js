import Clear from "./Clear"
import Ingredient from "./Ingredient"

export default function BurgerPane(props) {
    const burgerIngredients = props.burgerIngredients.map(layer => {
        return (
            <Ingredient 
                ingredientName={layer.name} 
                ingredientColor={layer.color}/>
            )
        })
    return (
        <>
        <section>
            <h3>Burger Pane</h3>            
            {burgerIngredients}
            <Clear clearBurgerPane={props.clearBurgerPane}/>
        </section>
        </>
    )
}