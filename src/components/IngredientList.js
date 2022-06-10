// TODO import React, and component files

import Ingredient from "./Ingredient";
import React, { Component } from "react";
export default class IngredientList extends Component {
  render() {
    // TODO map over items from props, save to variable - return a component and pass necessary props
    const listToRender = this.props.items.map((item, i) => {
      return (
        <Ingredient
          key={`ingred${i}`}
          item={item}
          i={i}
          handleAddToStack={this.props.handleAddToStack}
        />
      );
    });
    return (
      <div className="cols-start-1 row-start-2 ">
        <h2 className="text-xl">Ingredient List</h2>
        {listToRender}
      </div>
    );
  }
}
