import React from 'react'
import './App.css'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

const App = () => {
    return (
        <div>
        <h1>Hello from App!</h1>
            <div>
                <IngList />
            </div>
            <div>
                <BurgerPane />
            </div>
        </div>
    )
}

export default App