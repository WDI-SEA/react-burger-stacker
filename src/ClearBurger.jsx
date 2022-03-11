import { Component } from "react";

class ClearBurger extends Component {

  handleClearBtn = () => {
    console.log('clear')
  }

  render() {
    return (
      <button className="clear-btn" onClick={this.props.trashPlate}>Clear</button>
    )
  }
}

export default ClearBurger