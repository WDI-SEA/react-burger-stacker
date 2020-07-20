import React, { useState } from 'react';
// import BurgerPane from './BurgerPane';
import Ingredient from './Ingredient';

function IngredientList(props) {

    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                        <li id={ingredient} onClick={(e) => props.action(e)}>
                            <Ingredient ingredient={ingredient.name} />
                        </li>
                    )    
                })}
            </ul>
            
        </div>
    )
}


// const IngredientList = (props) => {
//     const [ingredientsAdded, setAdded] = useState([])

    
//     const handleClick = (i) => {
//         setAdded([i, ...ingredientsAdded])
//         console.log("clicked " + i.name)
//         console.log(ingredientsAdded)
//     }

//     let list = props.ingredients.map((item, i) => {
//         return (
//             <div>
//                 <ul>
//                     <li key={i}>
//                         {item.name}
//                         <input type="button" value="add" onClick={() => {handleClick(item)}}></input>
//                     </li>
//                 </ul>
                
//             </div>    
//         )
//     })

//     return (
//         <div>
//             <h2>Ingredients:</h2>
//             <div>
//                 {list}
//                 {<BurgerPane ingredientsAdded={ingredientsAdded}/>}
//             </div>   
//         </div>
//     )
// }

export default IngredientList;