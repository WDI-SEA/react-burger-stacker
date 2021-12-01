import React, {Component} from 'react'

class Stack extends Component {
    
    render() {
        console.log('stackedItems: ', this.props.stackedItems)
        let burger = this.props.stackedItems.map((item) => {
            return(
            <div style={{backgroundColor: item.color } }>
                <h1>{item.name}</h1>
            </div>
            )
        })


        return(
            <>
                <div id="burger">
                    {burger}
                </div>
                <button id="clearButton" onClick={this.props.clearStack}>Clear Burger</button>
            </>
        )
    }
}

export default Stack