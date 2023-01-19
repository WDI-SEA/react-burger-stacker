import React, {Component} from 'react';

export default class Ingredients extends Component {
    render() {
    return (
      <div
      onClick={this.props.handleAddToStack}
      >
        {this.props.item.name}
      </div>
    )
  }

}  