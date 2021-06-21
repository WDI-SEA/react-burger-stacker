import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <p style={{backgroundColor: this.props.color }}>
                { this.props.name }
            </p>
        )
    }
}