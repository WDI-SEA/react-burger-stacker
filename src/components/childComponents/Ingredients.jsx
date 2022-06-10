import React, { Component } from 'react'

export default class Ingredients extends Component {
  render() {
    const { name, color } = this.props
    return <li style={{ backgroundColor: color }}>{name}</li>
  }
}
