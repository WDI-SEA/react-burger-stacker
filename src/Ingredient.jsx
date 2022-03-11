import React, { Component } from 'react';

class Ingredient extends Component {
    render() { 
        return (
            <>
                <p>{this.props.ingredientList}</p>
            </>
        );
    }
}
 
export default Ingredient;