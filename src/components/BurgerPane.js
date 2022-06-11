import React, { Component } from 'react'
import BurgerStack from './BurgerStack'


export default class BurgerPane extends Component {
    
    render() {
        return (
            <>
                <div>
                    <h1 className="
                    text-3xl font-bold underline
                    ">Stack your Burger</h1>
                </div>
                <div>
                    <BurgerStack 
                    name={this.props.name} color={this.props.color} burgerStack={this.props.burgerStack}/>
                </div>
                <form>
                    <button
                    onClick={this.props.clearStack}
                    >Clear</button>
                </form>
            </>
            

        )
    }
}