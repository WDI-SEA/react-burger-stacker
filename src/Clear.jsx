import React, { Component } from 'react'

class Clear extends Component {
  render() {
    return (
      <button onClick={this.props.clearBurger}>
          Start Over
      </button>
    )
  }
}

export default Clear;