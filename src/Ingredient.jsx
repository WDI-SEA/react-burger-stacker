import React, { Component } from 'react';

class Ingredient extends Component {
    state = { 
        
     } 

    render() { 
        return (
            <p onClick={()=>{this.props.handleClick()}} className='ingredient' style={{backgroundColor:`${this.props.ingredientColor}`}}>{this.props.ingredientName}</p>
        );
    }
}
 
export default Ingredient;