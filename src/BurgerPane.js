import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {

    render () {
       
        
        return (
            <div className="burger-pane">
               <Ingredient />
            </div>
        )
    }
}