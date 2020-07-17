import React, {useState} from 'react'
import BurgerPane from './BurgerPane'
import './App.css';


const IngredientList = (props) => {
    const [ingredientsAdded, setAdded] = useState([])

    const handleClick = (i) => {
        setAdded([i.color, ...ingredientsAdded])
        console.log(ingredientsAdded)
    }
    
    let list = props.ingredients.map((item, i) => {
        return (
            <ul>
                <li key={i}>
                    {item.name} 
                    <input type="button" value="add" onClick={() => {handleClick(item)}} />
                </li>
            </ul>
        )
    })
    
    return (
        <div>
            <h1> These are the ingredients we have: </h1>
            <div>
                {list}
                {<BurgerPane ingredientsAdded={ingredientsAdded} />}
            </div>
        </div>
    )
}

export default IngredientList




