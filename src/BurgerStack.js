import React, { Component } from 'react'
import Ingredients from './Ingredients'
export default class BurgerStack extends Component {

    state = {
        burgerIngredientsToDisplay: this.props.burgerBuild
    }
    render() {
        return(
            <p>Placeholder ingredient</p>
        )
    }
}