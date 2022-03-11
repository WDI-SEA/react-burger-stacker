import React, { Component } from 'react';
import './App.css'
import Ingredient from './Ingredient';

export default class Clear extends Component {
  
    render() { 
        return (
            <button 
            onClick={this.props.clearBurger}
            >Clear the Burger
            </button>
        )
    }
}
 
