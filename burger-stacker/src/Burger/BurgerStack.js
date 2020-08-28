import React, {Component} from 'react';

const BurgerStack = (props) => {

    const ingredients = props.burger.map((burger, i) => {
        return <li key={i} style={{color:burger.color}}>
            {burger}
        </li>
    })
    return (
            <div>
            <ul>{ingredients}</ul>
            </div>
    )
}

export default BurgerStack