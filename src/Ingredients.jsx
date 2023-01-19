import React, { Component } from 'react'

export default class Ingredients extends Component {
    render () {
        return (
            <div
                // onClick={this.props.handle}
            >
                <p> {this.props.ingredient} </p>
            </div>
        )
    }
}