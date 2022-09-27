import React, { Component } from "react"
import Input from "./Input"

export default class Interact extends Component {
  render() {
    return ( 
      <div className="stacker-menu">
        <div className="header">
          <h1>Burger Stacker</h1>
          <p>Lorem Ipsum</p>
        </div>

        <Input 
          items={this.props.items}
        />

      </div>
    )
  }
}