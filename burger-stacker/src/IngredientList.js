import React from 'react';
import BurgerPane from './BurgerPane';

const IngredientList = (props) => {
    
    const newList = props.ingredients.map((i) => {
        return <li>{i.name}</li>
    })

    return (
        <ul>{newList}</ul>
    )

    
}

export default IngredientList;