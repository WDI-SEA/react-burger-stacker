import React, { Component } from 'react';
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    render() { 
        return (
            <>
                {this.props.ingredientList}
            </>
        );
    }
}
 
export default BurgerStack;