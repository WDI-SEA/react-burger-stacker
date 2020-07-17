import React from 'react';

function ClearBurger(props) {
    return (
        <div>
            <button onClick={(e) =>  props.action(e)}>
                Clear
            </button>
        </div>
    )

}

export default ClearBurger;

// // let ingredientsAdded = [i];
// // let clearBurger = ingredientsAdded
// // ingredientsAdded = [];
// // console.log(clearBurger)


// const clearBurger = (props) => {



  
//     return (
//         <ul>
//              <li>
//                 {list.name}
//                 <input type="button" value="clear" onClick={() => {clearBurger(clear)}} />
//             </li>
//         </ul>           
//     )
// }


