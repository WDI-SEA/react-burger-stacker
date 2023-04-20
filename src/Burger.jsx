import React, {Component} from "react"

export default class Burger extends Component {
    render() {

        const items = this.props.items.map((item, i) => {
            return(
            <p 
            key={'item' + i} 
            style={{backgroundColor: item.color}} 
            className="special"
            >{item.name}</p>
            )
            })
            
        return(
            <div className="burger">
                {items}
                
            </div>
        )
    }
}