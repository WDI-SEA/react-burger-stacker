import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div key={`ingredient=${this.props.i}`}
                onClick={this.props.handleAdd}> {this.props.item.name} </div>
        )
    }
}