import React, { Component } from 'react';
import Ingredient from './Ingredients';

class BurgerStack extends Component{
    render(){
        let burger = this.props.burgerStuff.map((item) =>{
            return(
                <Ingredient ingredient={item} />
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