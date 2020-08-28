import React, {useState} from 'react';
import Ingredients from '../Ingredients/Ingredients'
import BurgerStack from '../Burger/BurgerStack';

let IngredientsList = (props) => {

    const[burger, setBurger] = useState([])


    const addIngredients = (e, ingredients) => {
        e.preventDefault()
        setBurger(burger.concat(ingredient))
    }

        return (
            <div>
                <h1>Ingredients</h1>
                {/* <ul>{ingredientsList}</ul> */}
                <h1>Burger</h1>
                {/* <ul>{burgerList}</ul> */}
            </div>
        )
}

export default IngredientsList