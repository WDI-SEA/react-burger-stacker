import React, { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerPane extends Component {
  render() {
    const stackToRender = this.props.stack.map((item, i) => {
      return <Ingredient item={item} key={`ingred-${i}`} i={i} />;
    });
    return (
      <div className="cols-start-2">
        <h2 className="text-xl row-start-2 ">Burger Pane</h2>
        <button onClick={this.props.handleRemoveFromStack}>Clear Stack</button>
        {stackToRender.reverse()}
      </div>
    );
  }
}
