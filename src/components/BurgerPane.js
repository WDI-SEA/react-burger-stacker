// this is where the burger happens
import Ingredient from './Ingredient'
// we'll also want something that clears the burger

const BurgerPane = props => {
    // we want to loop over the burgerbits that user has added
    // display one Ingredient component for every bit of the burger
    let burgerBits = props.ingredients.map(mapIngredient => (
        <Ingredient ingredient={mapIngredient} />
    ))
    return (
        <section className='pane'>
            <h3>Build Your Burger! 🍔</h3>
            {burgerBits}
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane