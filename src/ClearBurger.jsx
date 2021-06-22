import { extend } from 'lodash'
import React, { Component } from 'react'

export default class ClearBurger extends Component {
    render() {
        return (
           <div>
               <button onClick= {(e) => this.props.clearBurger(e)}>
                   Clear Burger
               </button>
           </div>
        )
    }
}