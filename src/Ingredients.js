import React from 'react';


function Ingredients(props) {
    return (
        <div className='ingredients'>
            <div>
                <p style={{ backgroundColor: props.ingredients.color }}>
                    {props.ingredients.name}
                </p>
            </div>
        </div>
    )
}


export default Ingredients