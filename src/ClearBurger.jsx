import React, { Component } from 'react';

class ClearBurger extends Component {
    handleClearIngredients = (e) => {
        e.preventDefault()
        console.log('Clear Button Pressed')
        this.setState({ [e.target.name]: [] })
    }

    render() { 
        return (
            <>
                <div>   
                    <button className='center' name='burgerStack' onClick={this.handleClearIngredients}>Clear Ingredients</button>
                </div>
            </>
        );
    }
}
 
export default ClearBurger;