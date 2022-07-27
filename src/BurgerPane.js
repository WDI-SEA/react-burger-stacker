import React from 'react'
import Ingredients from './Ingredient'


const BurgerPane=({stack, clear, remove})=>{
    
   // map over all the added burger bits
   // still going to use the Ingredients Components
   // let burgerBits = this.props.ingredients.map((ing, index)=>((
    let burgerBits = stack.map((ing, index)=>((
        <li key={index}>
            <Ingredients
                itemKey={index}
                ingredient={ing}
                clickFunction={remove}
            />
        </li>

    )))

    return(
        <section>
            <h3> Burger Pane </h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane