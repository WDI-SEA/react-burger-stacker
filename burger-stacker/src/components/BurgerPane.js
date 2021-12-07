import React from 'react' 
import Ingredient from './Ingredient'

export default function BurgerPane(props) {
// loop over the burgerbits the user added
// display one ingredient component for every bit of the burger
    let burgerBits = props.ingredients.map(mapIngredient => {
        return  <Ingredient ingredient={mapIngredient} clicky={props.remove} />
    })
        return (
         <section className ="pane">
            <h3>The Burger</h3>
                { burgerBits }
             <button onClick={props.clear}>Clear Burger</button>
         </section>
        )
    }
