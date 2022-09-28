import React, { Component } from "react"

export default class BurgerClear extends Component {
  render () {
    return (
      <div>
        < button
            onClick={this.props.handleBurgerClear}
        >
            Clear
        </button>

      </div>
    )
  }
}