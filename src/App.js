import React, { useState } from 'react';
import './App.css';
import IngredientList from './IngredientList/IngredientList';
import BurgerStack from './BurgerPane/BurgerStack.jsx';
import IngredientDetail from './IngredientList/IngredientDetail.jsx'; 


const App = (props) => {

    const addIngredient = (e) => {
        setBurgerIngredients([IngredientDetail[e.target.value], ...burgerIngredients]) /// need the ...
    }
    const [burgerIngredients, setBurgerIngredients] = useState([])
    const clearBurger = () => { setBurgerIngredients([]) }

    return (
        <div className="App">
            <div>
                <div>
                    <IngredientList ingredientDetail={IngredientDetail} addIngredient={addIngredient} />
                </div>
                <div>
                    <BurgerStack burgerIngredients={burgerIngredients}  clearBurger={clearBurger} />
                </div>
            </div>
        </div>
    )
}

export default App;