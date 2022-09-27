import React, { Component } from "react";


export default class BurgerStack extends Component {
    
    clearStack = () => {
        return this.setState({
           stack: []
        }) 
    }

    
    render() {
        if(this.props.stack){
            const theStack = this.props.stack.map((item, i) => {
                return (
                    <li 
                        style={{backgroundColor: item.color}}
                        key={`item${i}`}>
                        {item.name}
                    </li>
                    )
            })
            return(
                <div className="stack">
                    <h1>Yo Borg</h1>
                <ul>
                    {theStack.reverse()}
                </ul>
                    
                <button onClick={this.clearStack}>Clear your Burger</button>
            </div>
        )}
    }
}