import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStacker = () => {

    const [ingredients, setIngredients] = useState([
        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Bacon', color: 'maroon' },
        { name: 'Onion', color: 'lightyellow' },
        { name: 'Cheese', color: 'gold' }
    ])
    const [burgerIngredients, setBurgerIngredients] = useState([])

    // add to stack function
    const addToStack = (e) => {
        console.log('this was clicked\n', e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        setBurgerIngredients(prevBurgIng => [{ name: ingName, color: ingColor }, ...burgerIngredients])
    }

    const clearBurger = () => {
        setBurgerIngredients([])
    }

    return (
        <main>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngredientList
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                />
            </div>
        </main>
    )
}

export default BurgerStacker