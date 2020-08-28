import React, {useState, useEffect} from 'react';
import IngredientButton from './IngredientButton';

const IngredientList = (props) => {
    let ingredientButtons = props.ingredients.map((item, i) => {
        return <IngredientButton key={i} ingredient={item} name={item.name} onClick={props.onClick}/>
    })
    
    
return (
    <>
    
    <div className='IngredientHolder'>
    <h1>List of Ingredients</h1>
        {ingredientButtons}
    </div>
    </>

)
    
}
        


export default IngredientList
