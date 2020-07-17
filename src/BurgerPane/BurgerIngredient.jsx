import React from 'react';

const Ingredient = (props) => {

    const burgerStyle = {backgroundColor: props.ingredient.color, color: props.ingredient.text}

    return (
        <div>
            <div key={props.index} style={ burgerStyle} >
                { props.ingredient.name }
            </div>
       </div>
    )
}

export default Ingredient;