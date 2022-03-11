import React, { Component } from 'react';

class Ingredient extends Component{    
    render () {
        return (
            <>
                <div 
                 className='ingredient'
                 style={{background: this.props.ingredientColor}}
                 onClick={()=>{this.props.addToBurger(this.props.ingredientName,this.props.ingredientColor)}}>
                {this.props.ingredientName}
                </div>
            </>
        )
    }
}

export default Ingredient