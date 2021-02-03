import React, { Component } from 'react';


class Ingredient extends Component {
  render () {
    return (
      <div>
        {/* Invidual ingredient */}
        <Ingredient ingredients={this.props.ingredients} />
      </div>
    )
  }
};

export default Ingredient;