import React, { Component } from 'react';
import BurgerStack from './BurgerStack';

class Ingredients extends Component {
    render() {
        return (
            <div className='ingredients'>
                <div>
                    <p style={{backgroundColor: this.props.ingredients.color}}>
                        {this.props.ingredients.name}
                    </p>
                </div>
            </div>
        )
    }
}

export default Ingredients