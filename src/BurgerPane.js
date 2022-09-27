import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerPane extends Component {
    render() {
        return (
            <>
            <h1>Burger here</h1>
            <Ingredients />
            </>
        )
    }
}