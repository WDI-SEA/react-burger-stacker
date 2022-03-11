import { clear } from '@testing-library/user-event/dist/clear';
import React, { Component } from 'react';
import Ingredients from './Ingredients';


class ClearBurger extends Component {
    
    clearBurger = () =>{
        console.log('clear burger')
    }
    render() { 
        return (
            <button onClick={this.clearBurger}>Clear Burger</button>
        );
    }
}
 
export default ClearBurger