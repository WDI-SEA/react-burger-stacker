import React, { useEffect, useState } from 'react';
import Ingredients from './Ingredients';
const IngredientList = props => {
    let allIngredients = props.ingredients.map((ingredient, i) => {
        return (
            <div className="ingredient-list">
                <Ingredients ingredients={ingredient} key={i} buttonClick={props.buttonClick} />
            </div>
            )
        })
        return (
            <div className="ingredients">
                <h1 className="section-title">Ingredients:</h1>
                <ul>{allIngredients}</ul>
            </div>
        )
    }
export default IngredientList