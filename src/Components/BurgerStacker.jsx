import React from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import { useState,
    useEffect
} from 'react'


let ingredients = [
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



export default function BurgerStacker(props) {
    
    const [burgerIngredients, setBurgerIngredients] = useState([])
    

    // Add Burger to stack
    const addToStack = (e) => {
        console.log(e.target)
        console.log(e.target.style.backgroundColor)
        console.log(e.target.innerText)
        

        setBurgerIngredients([{name: e.target.innerText, color: e.target.style.backgroundColor}, ...burgerIngredients])
        
    }
    

    // Clear Burger stack
    const clearBurger = () => {
        
            setBurgerIngredients([])
    }
        
        return (
            <main>
                <h1>BurgerStacker</h1>
                <div className="panes">
                    <IngredientList ingredients={ingredients} add={addToStack} />
                    <BurgerPane ingredients={burgerIngredients} clear={clearBurger} />
                </div>
            </main>
        )
}   
