import React from 'react';
import React, {useState} from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgePane from './BurgerPane'

function App() {
    return (
        <div>
        <IngredientList />
        <BurgePane />
        </div>
    )
}

export default App;
