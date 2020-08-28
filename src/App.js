import React, {useState} from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgePane from './BurgerPane'

function App() {
    let [ingredients, setIngredients] = useState([
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
    ])

    let [chosenIngredients, setChosenIngredients] = useState ([])

    let addIngredient = (e, ingredients) => {
        e.preventDefault()
        console.log(ingredients);
        console.log(chosenIngredients);
        setChosenIngredients([ingredients, ...chosenIngredients])
    }

    let clearBurger = () => {
        setChosenIngredients ([])
    }
    
    return (
        <div class="container">
            <div class='App'>
                <IngredientList ingredients={ingredients} addIngredient={addIngredient} />
                <BurgePane chosenIngredients={chosenIngredients} clearBurger={clearBurger} />
            </div>  
        </div>        
    )
}

export default App;
