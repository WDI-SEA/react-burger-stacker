import React, {useState, useEffect} from 'react';
import IngredientButton from './IngredientButton';

const IngredientList = (props) => {
    let ingredientButtons = props.ingredients.map((item, i) => {
        return <IngredientButton key={i} ingredient={item} name={item.name} onClick={props.onClick}/>
    })
    
    
return (
    <>
    <h1>List of Ingredients</h1>
    <div className='IngredientHolder'>
        {ingredientButtons}
    </div>
    </>

)
    
}
        


export default IngredientList
