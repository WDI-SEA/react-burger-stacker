import React, { Component } from 'react'
// import Ingredients from './ingredients'

export default class BurgerStack extends Component{
    
    render(){
        const addedStack = this.props.burgerStack.map(stack => {
            return <div key={stack.id}
            
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