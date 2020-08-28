import React from 'react'

function Stack(props) {
    return(
        <div>
            <ul>
                {props.burgerPane.map((ingredient, i)=>(
                    <li key={i} style={{backgroundColor: ingredient.color}}>{ingredient.name}</li>
                ))}
                <button class="clear" onClick={()=> {
                    props.clearClick()
                }}>Clear</button>
            </ul>
        </div>
    )
}
export default Stack