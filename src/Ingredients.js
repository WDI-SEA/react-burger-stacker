import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div>
                {this.props.ingredients}
            </div>
        )
    }
}

export default Ingredients