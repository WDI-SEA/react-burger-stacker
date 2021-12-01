import React, { Component } from 'react'

class Ingredients extends Component {
    render() {
        // console.log(this.props.fullList[0])
        const items = this.props.itemsList.map((item, index) => {
            return (
            <li key={index}>{item.name}
                <form onClick={this.props.onClick}>
                    <button type="submit">Add Item</button>
                </form>
            </li> 
            )
        })

        return (
            <div>
            <h2>Ingredients Component (List)</h2>
            <ul>
                {items}
            </ul>
            </div>
        )
    }
}

export default Ingredients