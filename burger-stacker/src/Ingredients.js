import React from 'react'

const Ingredients = (props) => {
    return (
        <div>
            <ul>
                {props.ingredientsData.map((ingredient, key) =>
                    <li key={key}>
                        {ingredient.name}
                        <button className='add-button' onClick={() => props.addIngredient(ingredient)}>Add</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Ingredients