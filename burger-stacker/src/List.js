import React, { Component } from 'react'

class List extends Component {
    render () {
        let allItems = this.props.list.map((li, i) => {
            return (
            <div className="listItem"> 
                    <label>{li.name}  </label>
                    <button onClick={this.props.add} name={li.name} id={i}>Add</button>
            </div>
            )
        })
        return(
            <div className="availableIngredientList">
                {allItems}
            </div>
        )
    }
}

export default List