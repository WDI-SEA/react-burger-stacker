import React, { Component } from 'react';

class BurgerIngredients extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <li>{this.props.ingredient}</li>
            </>
        );
    }
}
 
export default BurgerIngredients;