import React, { Component } from 'react'

export default class ingredient extends Component {
    render(){
        return (
            <div>
                <p style={{backgroundColor: this.props.color}}>
                    {this.props.ingredient}
                </p>
                
            </div>
        )
    }
}