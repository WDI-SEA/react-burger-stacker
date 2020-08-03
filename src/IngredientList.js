import React, { useState } from 'react';
import Ingredient from './Ingredient'


    // let ingredientsAdded = []
function IngredientList(props) {
    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                    <li id={ingredient} onClick={(e) => props.action(e)}>
                        <Ingredient ingredient={ingredient}/>
                    </li>
                    )})}
            </ul>

        </div>
    )
}

export default IngredientList;

// const [isAdded, setAdded] = useState(false)

// const handleClick = (e) => {
//     // e.StopPropagation()
//     setAdded(!isAdded)
//     ingredientsAdded.push({ list })
//     // setAdd()
// }

// let list = props.ingredients.map((item) => {

//     return (
//         <ul>
//             <li>{item.name}
//                 <input key={item} type="button" value='add' onClick={() => { handleClick(isAdded) } } /></li>
//         </ul>
//     )
// });
// return (
//     <div>
//         <h1>these are the ingredients we have:</h1>
//         <div>
//             {list}
//         </div>
//     </div>
// )