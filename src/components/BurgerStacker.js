import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
// build and import BurgerPane
// build and import IngredientList

const BurgerStacker = () => {
    // state --> holds ingredients
    const [ingredientsOfThings] = useState(
        [
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
            { name: 'Cheese', color: 'gold' },
            { name: 'Onion', color: 'lightyellow' }
        ]
    )

    let [burgerIngredients, setBurgerIngredients] = useState([])

    // add to stack function(maybe passed to child)
    const addToStack = (e) => {
        e.persist()
        console.log('this is what was clicked: ', e.target);
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText

        // setBurgerIngredients = (()=> {
        //     return [{ name: ingName, color: ingColor }, ...burgerIngredients]
        // })
        setBurgerIngredients(() => {
            let updatedList = {name: ingName, color: ingColor}
            return [updatedList, ...burgerIngredients]
        })
    }

    // remove ingredients from burger stack
    // kinda buggy, removes all ingredients of same name clicked, should just remove one ingredient per click
    // TODO: make it so one ingredient is removed per click
    const removeFromStack = (e) => {
        console.log('old stack', burgerIngredients);
        let newBurgerIngArr = burgerIngredients.filter(ingrs => ingrs.name !== e.target.innerText)
        console.log('new stack', newBurgerIngArr);
        setBurgerIngredients(() => {
            return newBurgerIngArr
        })
    }

    // clear burger stack function(maybe passed to child?)
    const clearBurger = () => {
        setBurgerIngredients(() => {
            return burgerIngredients = []
        })
    }


    return (
        <main>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList
                    ingredients={ingredientsOfThings}
                    add={addToStack}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                    removeIngr={removeFromStack}
                />
            </div>
        </main>
    )

}

export default BurgerStacker