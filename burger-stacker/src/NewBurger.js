import React, { Component } from "react";

export default class NewBurger extends Component {
  render() {
    const createdBurger = this.props.burgerItems.map((Item, i) => {
      return <p key={i}>{Item.name}</p>;
    });
    return (
      <div>
        {createdBurger}
        <p>Burger Stacking Area</p>
        <br />
        <button onClick={this.props.delete}>Clear Burger</button>
      </div>
    );
  }
}
