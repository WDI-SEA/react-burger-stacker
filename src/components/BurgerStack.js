import React, { Component } from 'react'
// import Ingredients from './ingredients'

export default class BurgerStack extends Component{
    
    render(){
        const addedStack = this.props.burgerStack.map((stack, i) => {
            return <div key={`stack${i}`}
            
            style={{
                backgroundColor: stack.color
            }}
            >{stack.name}</div>
        })
        return (
            <div>
                {addedStack}
            </div>
        )
    }
}