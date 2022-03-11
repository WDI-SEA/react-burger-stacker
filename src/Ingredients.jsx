import React, { Component } from 'react';

class Ingredients extends Component {



    render() { 
        return (
            
            <p onClick={this.props.addIngredient}>{this.props.ingredient}</p>
           
       
        );
    }
}
 
export default Ingredients