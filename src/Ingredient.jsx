export default function Ingredient(props) {
      return (
        <div className="ingredient" 
        onClick={()=>{
          props.addToBurger(props.ingredient)
        }}>
            <p>{props.ingredient.name}</p>
        </div>
    )
  }


// import React, { Component } from 'react'

// class Ingredient extends Component {
//   render() {
//     return (
//         <div className="ingredient" 
//         onClick={()=>{
//           this.props.addToBurger(this.props.ingredient)
//         }}>
//             <p>{this.props.ingredient.name}</p>
//         </div>
//     )
//   }
// }

// export default Ingredient;