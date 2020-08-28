import React from 'react'

function IngredientsArea (props) {

    const ingredients = props.ingredients.map((ingredient,i)=>{
        return (
            <li key={i}>
                <button
                    onClick={()=>{props.handleClick(i)}}
                    name={ingredient.name}
                    style={{background: ingredient.color}}
                    >
                    {ingredient.name}
                </button>
            </li>)
    })

    return (
        <div className="ingredientClass">
            <ul>
                {ingredients}
            </ul>
        </div>
)
}

export default IngredientsArea
