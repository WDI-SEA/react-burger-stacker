import { Component } from "react";

class Ingredient extends Component {

  render() {
    return (
      <div>
        <h4 onClick={this.props.addIngredientsHandler}>{this.props.ingredient}</h4>
        {/* <p>{this.props.color}</p> */}
      </div>
      )
  }
}

export default Ingredient