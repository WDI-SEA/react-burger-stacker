import React, {Component} from 'react';

class Ingredients extends Component {
    render() {
        return (
            <li>{this.props.doThis.name}</li>
        )
    }
}

export default Ingredients