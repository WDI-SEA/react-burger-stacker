import React from 'react'

const AddedIngredients = (props) => {
    let listItem = props.addedIngredients.map((ingredient, key) => {
        let liStyle = {background: ingredient.color}
        return (
            <li style={liStyle} key={key}>{ingredient.name}</li>
        )
    })

    return (
        <div>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default AddedIngredients