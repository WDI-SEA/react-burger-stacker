import React from 'react';
import Ingredient from './Ingredients';

function BurgerStack(props){
        let burger = props.burgerStuff.map((item, i) =>{
            return(
                <Ingredient ingredient={item} key={i}/>
            )
        })
        return(
            <div className="burger_stack">
                {burger}
            </div>
        )
    }

export default BurgerStack;