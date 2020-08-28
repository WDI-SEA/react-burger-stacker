import React from 'react'

export default function IngredientItem({ingredient}) {
    return (
    <li><button className="ing-butt" style={{background: ingredient.color}}>{ingredient.name}</button></li>
    )
}