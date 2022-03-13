// import React, { Component } from 'react'

// class Ingredient extends Component {
//     render() {
//         return (
//             <div 
//                 className="ingredient" 
//                 onClick={()=>{
//                     this.props.addToBurger(this.props.ingredient)
//                 }}
//             >
//                 <p>{this.props.ingredient.name}</p>
//             </div>
//         )
//     }
// }

// export default Ingredient;



// functional component

export default function Ingredient({ ingredient, addToBurger }) {
    return (
        <div 
            className="ingredient" 
            onClick={()=>{
                addToBurger(ingredient)
            }}
        >
            <p>{ingredient.name}</p>
        </div>
    )
}