import React from "react";
import Ingredient from "./Ingredient";


const BurgerPane = props => {
    // we want to loop over the burgerBits that the user has added 
    //display one ingredient for one Ingredient component
    
    let burgerBits = props.ingredients.map(mapIng => (
        <Ingredient ingredient={mapIng}/>
        ))
        
        return (
            <section className="pane">
                <h3>The Burger</h3>
                { burgerBits }
                <button onClick={props.clear}>Clear Burger</button>
            </section>
        )
    
}

export default BurgerPane
