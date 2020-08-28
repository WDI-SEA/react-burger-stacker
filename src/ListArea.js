import React from 'react'

const ListArea = (props) => {

    const ingredients = props.ingredients.map((ingredient, i) => {
        return <li key={i} style={{background: ingredient.color}} >
                    {ingredient.name} 
                    <button onClick={(e)=>props.onClick(e, ingredient)} >+</button>
                </li>
    })

    return(
        <div className="container">
            <h2>Ingredients</h2>
            <ul> {ingredients} </ul>
            <form>
                <input type="text"
                placeholder="Type a new item here"
                />
                <button onClick={props.addNew}>Add it!</button>
            </form>
        </div>
    )
}

export default ListArea