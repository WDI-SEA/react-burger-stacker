import React, {Component} from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div>
            <li style={{color:this.props.ingredients.color}}>{this.props.ingredients.name}</li>
            </div>
        )
    }
}

export default Ingredients