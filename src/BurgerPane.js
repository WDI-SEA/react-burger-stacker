import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render() {
        console.log(this.props)
        const myBurger = this.props.ingredients.map((ingredient, i) => {
            return <Ingredient 
                ingredient={ingredient}
                key={`stack${i}`}
            />
        })

        return (
            <div style={{border:"1px solid black", height: "730px", width:"50%", padding:'40px', 'paddingTop': 0, flex:'1', justifyContent:'center'}}>
                <p style={{'fontSize':'30px', textAlign: 'center'}}>your bouger:</p>
                {myBurger}
                <button style={{justifyContent:'center'}} onClick={this.props.handleRemoveFromStack}>Clear</button>
            </div>
        )
    }
}