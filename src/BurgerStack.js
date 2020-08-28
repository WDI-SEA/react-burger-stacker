import React from 'react';

export default function BurgerStack(props) {

    let userBurger = props.burger.map((b, i) => {
        return <li key={i} style={{listStyle: 'none'}}> {b} </li>
    })

    return (
        <>
            <h5>This the Burger Stack</h5>
            <ul>
                {userBurger.reverse()}
            </ul>
        </>
    )
}