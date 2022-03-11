import React, { Component } from 'react';

class Ingredient extends Component {

    render() {
        return (
            <>
                <div onClick={() => { this.props.handleClicker(this.props.ingredient) }} style={{ backgroundColor: this.props.ingredient.color }}>
                    {this.props.ingredient.name}
                </div>

            </>
        );
    }
}

export default Ingredient;