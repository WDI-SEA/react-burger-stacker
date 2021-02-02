import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
            <span>{this.props.ingredients}</span>
        )
    }
};

export default Ingredient;