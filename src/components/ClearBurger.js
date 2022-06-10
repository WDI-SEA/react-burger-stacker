import React, { Component } from 'react'

export default class ClearBurger extends Component {
    render() {
        return (
            <>
                <p onClick={() => { this.props.clearBurger() }}>clear</p>
            </>
        )
    }
} 