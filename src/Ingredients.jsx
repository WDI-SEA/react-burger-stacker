import React, { Component } from 'react';

class Ingredients extends Component {
    state = {  } 
    render() {
        return (
            <>
            <li>
                {this.props.ingredient}
                <button 
                    onClick={this.props.addToBurger}
                    name={this.props.ingredient}
                >
                    Add to Burger
                </button>
            </li>
            </>
        );
    }
}
 
export default Ingredients;