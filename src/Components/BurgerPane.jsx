import React from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

export default function BurgerPane(props) {
    
        let burgerbits = props.ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient} />
        ))
        return (
            <section className='pane'>
                <h1>BURGER PANE</h1>
                <ClearBurger clear={props.clear} />
                {burgerbits}
            </section>
        )
    
}

