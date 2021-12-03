import React, { Component } from "react";

const NewBurger = props => {
  
  
    const createdBurger = props.burgerItems.map((Item, i) => {
      return <p key={i}>{Item.name}</p>;

    });
    return (
      <div>
        {createdBurger}
        <p>Burger Stacking Area</p>
        <br />
        <button onClick={props.delete}>Clear Burger</button>
      </div>
    );
}

export default NewBurger