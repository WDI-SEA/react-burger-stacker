import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <span style={{backgroundColor: this.props.color}}>{this.props.name}</span>
        )
    }
}