import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
                <h4 style={{backgroundColor: this.props.color}}>
                    {this.props.ingredients}</h4>
        )
    }
}