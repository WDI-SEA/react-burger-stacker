import React, { Component } from 'react';
import Ingredient from './Ingredients';

class BurgerStack extends Component{
    render(){
        let burger = this.props.burger.map((item,index) =>{
            return(
                <p key={index}>{item}</p>
            )
        })
        return(
            <div>
                {burger}
            </div>
        )
    }
}

export default BurgerStack;