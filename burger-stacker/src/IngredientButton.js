import React from 'react';

export default function IngredientButton(props) {
    return <button className="cool-btn" value={props.name} onClick={(e) => props.onClick(e)}>
    {props.name}
    </button>
}