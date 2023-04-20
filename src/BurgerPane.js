import React, { Component } from "react";
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component{
    render(){
        const stackMap = this.props.stack.map((ingredient, i) => {
            return (
                <div>
                    <BurgerStack
                        key={`${this.props.stack[i].name}-${i}`}
                        stack={this.props.stack[i]}
                    />
                </div>
                )
            })
        return(
            <div>{stackMap}</div>
        )
    }
}