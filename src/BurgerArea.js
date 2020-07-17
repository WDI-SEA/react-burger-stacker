import React, { useState } from "react"

const BurgerArea = (props) => {
    const [isAdded, setAdded] = useState(false)
    let ingredientsAdded = []

    const handleClick = (e) => {
        setAdded(!isAdded)
        ingredientsAdded.push({ list })

    }



    let list = props.ingredients.map((item) => {
        return (
            <ul>
                <li>
                    {item.name}
                    <input type="button" value="add" onClick={() => { handleClick(isAdded) }} />
                </li>
            </ul>
        )
    })
}

export default BurgerArea;