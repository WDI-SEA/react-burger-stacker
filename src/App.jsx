import React from 'react'
import './App.css'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

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

const App = () => {
    return (
        <div>
            <h1>Build-a-Burger!</h1>
            <div class="kitchen-box">
                <div class="ing-box">
                    <IngList ingredient={ingredients}/>
                    {/* <IngList /> */}
                </div>
                <div class="burger-box">
                    <BurgerPane />
                </div>
            </div>
        </div>
    )
}

export default App