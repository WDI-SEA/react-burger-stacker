import React, { Component } from 'react'

export default class ClearBurger extends Component {



    render() {
        return (
            <div>
                <button onClick={(e) => this.props.clearBorger(e)}>Clear Borger</button>
            </div>
        )
    }
}