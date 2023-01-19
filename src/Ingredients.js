import { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div
                key={`ingred-${this.props.i}`}
                onClick={this.props.handleAddToStack}

                
                
            >
                {this.props.item.name}

            </div>

        )
    }
}