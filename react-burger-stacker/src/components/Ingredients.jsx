import React, { Component } from "react"

class Ingredient extends Component {
  render() {
    return (
      <>
       <div
            key={`ngred-${this.props.i}`}
            onClick={this.props.i}
            style={{backgroundColor: this.props.item.color}}
        >
            {this.props.item.name}
       </div>
        
      </>
    )
  }
}

export default Ingredient
