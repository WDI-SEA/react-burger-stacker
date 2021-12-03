import React, { useState, useEffect } from 'react';
import ClearBurger from './ClearBurger';

const BurgerStack = props =>{

//     render(){
    
        return (
            <div className='burgerStack'>
                <h1>This is the burger</h1>
                {
                    props.stack.map((ingredients) => {
                        return(
                            <>
                                <ul>{ingredients}</ul>
                            </>
                        )
                    })
                }
                {/* <ul className='burgerIngredients'>{this.props.stack}<br/></ul> */}
                <ClearBurger/>
            </div>
        )
    }
export default BurgerStack