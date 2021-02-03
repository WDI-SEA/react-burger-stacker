import React, { Component } from 'react';
import Ingredients from './Ingredients';

class BurgerStack extends Component {
    render() {
        return (
            <div className="stack">
                <Ingredients ingredients={this.props.ingredients} />
            </div>
        )
    }
}

export default BurgerStack;