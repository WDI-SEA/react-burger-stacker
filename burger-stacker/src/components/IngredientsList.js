import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientsList(props){
    
        let allIngredients = props.ingredients.map((ingredient) => {
          return(  
            <li onClick={props.add}>
                <Ingredient ingredient={ingredient} /> 
            </li>
          )
        })

        return (
            <div>
                <section className = 'pane'>
                    <h3>Ingredients List</h3>
                    <ul className = 'ingeredients-list'>
                        {allIngredients}
                    </ul>
                </section>
            </div>
        )
    
}