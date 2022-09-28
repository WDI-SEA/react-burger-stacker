import { useState } from "react";
import IngredientContainer from "./IngredientContainer";
import BurgerContainer from "./BurgerContainer";

const ingredientData = [
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

function App() {
    const [ingredientArray, setIngredientArray] = useState(ingredientData);
    const [burgerArray, setBurgerArray] = useState([]);
    const handleIngredientClick = ingredient => {
        setBurgerArray([ingredient, ...burgerArray]);
    }
    const handleAddIngredient = e => {
        e.preventDefault();
        const newIngredient = {
            // the input value from the form is on the first index of target
            name: e.target[0].value,
            color: "antiquewhite"
        }
        setIngredientArray([...ingredientArray, newIngredient]);
    }
    const handleBurgerClear = () => {
        setBurgerArray([]);
    }
    return (
        <div>
            <h1 className="mt-3 text-center text-5xl font-bold">Burger Stacker</h1>
            <div className="flex justify-center items-end gap-4 mx-auto mt-3 mb-5 p-3 w-fit border-2 rounded">
                <IngredientContainer 
                    ingredientArray={ingredientArray}
                    handleIngredientClick={handleIngredientClick}
                    handleAddIngredient={handleAddIngredient}
                />
                <BurgerContainer 
                    burgerArray={burgerArray} 
                    handleBurgerClear={handleBurgerClear} 
                />
            </div>
        </div>
    );
}

export default App;
