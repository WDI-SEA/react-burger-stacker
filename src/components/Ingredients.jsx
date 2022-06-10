import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div key={`ingredient-${this.props.i}`}
                onClick={this.props.handleAddToStack}
                style={{backgroundColor: this.props.item.color}}>

                    {this.props.item.name}
            </div>
        )
    }
}

export default Ingredients