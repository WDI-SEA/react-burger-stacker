import React, {useState} from 'react'
import BurgerStack from './BurgerStack'

const IngredientList = (props) => {
    const [isAdded, setAdded] = useState([])
    const handleClick = (i) => {
        setAdded([i.color, ...isAdded])
        console.log(isAdded)
    }

    let list = props.ingredients.map((item, i) => {
        return (
            
            <li key={i}>
                {item.name}
                <button onClick={(e) => {handleClick(item)}}>Add</button>
            </li>
        )
    })

    return (
        <ul>
            {list}
            <BurgerStack isAdded={isAdded} />
        </ul>

    )
}


export default IngredientList