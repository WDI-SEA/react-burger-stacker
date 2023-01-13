import React, { Component } from 'react'
import BurgerPane from './BurgerPane'

export default class Ingredient extends Component {

    render() {
        // console.log(this.props)
        return (
            <div className="ingredient" onClick={()=>this.props.handleClick({name:this.props.ingredient.name, color:this.props.ingredient.color})} style={{'backgroundColor':`${this.props.ingredient.color}`, height: '50px', width: '250px', border: '1px solid black', margin: '0 auto'}}>
                <p style={{'textAlign':'center'}}>{this.props.ingredient.name}</p>
            </div>
        )
    }
}