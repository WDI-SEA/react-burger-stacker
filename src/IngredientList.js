import React from 'react';
import Ingredients from './Ingredients';


function IngredientList(props) {
    // console.log(this.props.ingredient)
    let allIngredients = props.ingredient.map((ingredient, i) => {
        return (
            <li onClick={props.addIngredient} key={i}>
                <Ingredients ingredients={ingredient} />
            </li>
        )
    })

    return (
        <div className="ingredsList">
            {allIngredients}
        </div>
    )
}


export default IngredientList