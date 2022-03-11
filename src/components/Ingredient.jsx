import React, { Component } from 'react'

class Ingredient extends Component { 
    render() { 
        return (
            <div style={{backgroundColor: this.props.ingredient.color}}>
                <p> {this.props.ingredient.name}</p>

                {
                    this.props.isStacked ? null
                    :
                    <input 
                        type="submit" 
                        value="Stack!"  
                        onClick={() => {this.props.addToStack(this.props.ingredient)}}
                    />
                    
                }
                <hr />
            </div>
        );
    }
}
 
export default Ingredient;