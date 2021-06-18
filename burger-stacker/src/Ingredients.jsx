import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div>
                <h4>Name: {this.props.name}</h4>
                <h4>Color: {this.props.color}</h4>
            </div>
        )
    }
}