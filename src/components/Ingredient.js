import React, { Component } from 'react'

export default class Ingredient extends Component {

    
    render() {
        return (
            <button onClick={this.props.onClick} value={this.props.name}>{this.props.name}</button>
        )
    }

}
