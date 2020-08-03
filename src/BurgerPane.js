import React, { useState } from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    // const [add, isAdded] = useState(false)
    return (
        <div>
            <BurgerStack ingredients={props.ingredients}/>
            <ClearBurger action={props.action}/>
        </div>
    );
};

export default BurgerPane;