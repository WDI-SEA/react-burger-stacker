import React, { Component } from 'react'

class ClearBtn extends Component {
    state = {  } 
    render() { 
        return (
            <input 
                type="submit" 
                value="Clear Burger!"
                 onClick={this.props.clearBurger} 
            />
        );
    }
}
 
export default ClearBtn;