import React, { Component } from 'react';

class Clear extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='ingredient'>
                <button onClick={this.props.clearBurgerPane}>Clear</button>
            </div>
            </>
        );
    }
}
 
export default Clear;