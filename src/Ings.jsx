import React from 'react'

const Ings = (props) => {
    return (
        <div>
            <h3>Hello from Ings!</h3>
                <p style={{color: props.color}}>Name: {props.name}</p>
                <p style={{color: props.color}}>Color: {props.color}</p>
        </div>
    )
}

export default Ings