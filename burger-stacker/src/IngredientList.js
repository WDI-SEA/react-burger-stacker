import React from 'react'
import Ingredients from './Ingredients'

const IngredientList = (props) => {
    return (
        <div className='ingredient-list'>
            <h4>IngredientList</h4>
            <Ingredients ingredientsData={props.ingredientsData} addIngredient={props.addIngredient} />
        </div>
    )
}

export default IngredientList