import React, { Component } from 'react'

const ingredients = this.props.ingredients

export default class BurgerStack extends Component{

    state = {
        ingredients: []
    }

    render(){
        return(
            <div>
                burger stack
            </div>
        )
    }
}