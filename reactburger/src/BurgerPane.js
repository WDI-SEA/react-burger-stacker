import React from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


const BurgerPane = (props) => {
    return (
        <div>
            <BurgerStack ingredients={props.ingredients}/>
            <ClearBurger  action={props.action} />
            <h1>
               🍔 Come to Luke's Burgers ! 🍔
            </h1>
           {/* <div>{props.name}</div>  */}
        </div>
    );
};

export default BurgerPane;