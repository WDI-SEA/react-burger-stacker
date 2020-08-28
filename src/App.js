import React, {useState} from 'react';
import './App.css';
import ListArea from './ListArea'
import StackArea from './StackArea'


function App() {

    const [burger, setBurger] = useState([])
    const [ingredients, setIngredients] = useState(
        [
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

    const addIngredient = (e, ingredient) => {
        e.preventDefault()
        setBurger([ingredient, ...burger])
    }

    const clearBurger = (e) => {
        e.preventDefault()
        setBurger([])
    }

    const undoBurger = (e) => {
        e.preventDefault()
        setBurger()
    }

    const addNewIngredient = (newIngred) => {
        newIngred.preventDefault()
        setIngredients(...ingredients, newIngred)
    }

    return (
        <div className="container">
            <h1>Burger Stackin' Action</h1>
            <div className="App">
                <div className="column">
                    <ListArea ingredients={ingredients} onClick={addIngredient} addNew={addNewIngredient}/>
                </div>
                <div className="column">
                    <StackArea burger={burger} onClick={clearBurger} undo={undoBurger} />
                </div>
            </div>
        </div>
    )
}

export default App;
