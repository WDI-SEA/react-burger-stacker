import { Component } from "react";

class Ingredient extends Component {

  render() {
    return (
      <div>
        <h4
          onClick={this.props.addIngredientsHandler}
          style={{ backgroundColor: `${this.props.color}` }}
        >{this.props.ingredient}</h4>
        {/* <p>{this.props.color}</p> */}
        {/* <p>{this.props.ingredienstList.color}</p> */}
      </div>
      )
  }
}

export default Ingredient