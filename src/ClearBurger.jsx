import { clear } from '@testing-library/user-event/dist/clear';
import React, { Component } from 'react';
import Ingredients from './Ingredients';


class ClearBurger extends Component {
    
    
    render() { 
        return (
            <button onClick={this.props.clearBurger}>Clear Burger</button>
        );
    }
}
 
export default ClearBurger