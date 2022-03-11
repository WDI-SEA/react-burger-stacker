import React, { Component } from 'react';

class Ingredients extends Component {
    
    render() { 
        return (
            
            <div 
            className='ingredient' 
            onClick={()=>this.props.addToBurger(this.props.ingredient)}
            >

                 <p>{this.props.ingredient.name}</p>
            </div>
           
       
        );
    }
}
 
export default Ingredients