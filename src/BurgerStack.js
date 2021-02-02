import React, { Component } from 'react';
import Ingredients from './Ingredients';

class BurgerStack extends Component {
    render() {
        return (
            <div>
                <Ingredients ingredients={this.props.ingredients} />
            </div>
        )
    }
}

export default BurgerStack;