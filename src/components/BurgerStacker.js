import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = props => {
    //HOOKS
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
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'},
    ])
    const [burgerIngredients, setBurgerIngredients] = useState([]) 
    //add to stack function
    const addToStack = (e) => {
        //console.log("e", e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        // this.setState({
        //     burgerIngredients: [{name: ingName, color: ingColor}, ...this.state.burgerIngredients]
        // })
        setBurgerIngredients(()=> {
            return [{name: ingName, color: ingColor}, ...burgerIngredients]
        })
    }
    //clear burger stack function
   const clearBurger = () => {
        // this.setState({
        //     burgerIngredients: []
        // })
        setBurgerIngredients(() => {
            return []
        })
    }
    return (
        <main>
            <h1>Burger Stacker</h1>
            <div className="panes">
                < IngredientList 
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