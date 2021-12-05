import React, { useState } from 'react' 
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStacker = () => {
    // state = {
    //     ingredients: [
    //         {name: 'Kaiser Bun', color: 'saddlebrown'},
    //         {name: 'Sesame Bun', color: 'sandybrown'},
    //         {name: 'Gluten Free Bun', color: 'peru'},
    //         {name: 'Lettuce Wrap', color: 'olivedrab'},
    //         {name: 'Beef Patty', color: '#3F250B'},
    //         {name: 'Soy Patty', color: '#3F250B'},
    //         {name: 'Black Bean Patty', color: '#3F250B'},
    //         {name: 'Chicken Patty', color: 'burlywood'},
    //         {name: 'Lettuce', color: 'lawngreen'},
    //         {name: 'Ketchup', color: 'red'},
    //         {name: 'Bacon', color: 'maroon'},
    //         {name: 'Hot Mustard', color: 'gold'},
    //         {name: 'Cheese', color: 'goldenrod'}
    //       ],
    //       burgerIngredients: []
    // }

    const [ingredients, setIngredients] = useState([
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Ketchup', color: 'red'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Hot Mustard', color: 'gold'},
        {name: 'Cheese', color: 'goldenrod'}
      ])
    const [burgerIngredients, setBurgerIngredients] = useState([])

    const addToStack = (e) => {
        console.log('this is what was clicked', e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        setBurgerIngredients([
            { name: ingName, color: ingColor },
                ...burgerIngredients
            ]
        )
    }

    const clearBurger = () => {
        setBurgerIngredients([])
    }

    return (
        <main>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngredientList 
                    ingredients={ ingredients } 
                    add={ addToStack } 
                />
                <BurgerPane 
                    ingredients={ burgerIngredients }
                    clear={ clearBurger }
                />
            </div>
        </main>
    )
}

export default BurgerStacker