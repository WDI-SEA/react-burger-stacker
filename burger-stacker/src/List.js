import React from 'react'

const List = props => {
    let allItems = props.list.map((li, i) => {
        return (
        <div className="listItem"> 
                <label>{li.name}  </label>
                <button onClick={props.add} name={li.name} id={i}>Add</button>
        </div>
        )
    })
    return(
        <div className="availableIngredientList">
            {allItems}
        </div>
    )
}

export default List