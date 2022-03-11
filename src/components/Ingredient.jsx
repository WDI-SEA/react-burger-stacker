import React, { Component } from 'react'

class Ingredient extends Component { 
    render() { 
        return (
            <div style={{backgroundColor: this.props.ingredient.color}}>
                <p> name: {this.props.ingredient.name} | color: {this.props.ingredient.color}</p>
                <input 
                    type="submit" 
                    value="Stack!"  
                    onClick={() => {this.props.addToStack(this.props.ingredient)}}
                />
                <hr />
            </div>
        );
    }
}
 
export default Ingredient;