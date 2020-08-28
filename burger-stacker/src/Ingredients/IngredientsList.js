import React, {useState} from 'react';
import Ingredients from '../Ingredients/Ingredients'
import BurgerStack from '../Burger/BurgerStack';

let IngredientsList = (props) => {

    const[burger, setBurger] = useState([])

    const ingredients = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ]

    const addIngredients = (ingredient) => {
        setBurger(burger.concat(ingredient))
    }

        return (
            <div>
                <h1>Ingredients</h1>
                <ul><Ingredients ingredients={ingredients} addIngredients={addIngredients}/></ul>
                <h1>Burger</h1>
                <ul><BurgerStack burger={burger}/></ul>
            </div>
        )
}

export default IngredientsList