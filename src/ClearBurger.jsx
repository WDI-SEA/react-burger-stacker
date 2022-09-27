import React, { Component } from 'react'

export default class ClearBurger extends Component {

    clearBorger = (e) => {
        console.log('Borger Deletus')
        // this.setStsate(prevState => {
        //     return {

        //     }
        // })
    }

    render() {
        return (
            <div>
                <button onClick={this.clearBorger}>Clear Borger</button>
            </div>
        )
    }
}