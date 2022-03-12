// import './App.css'
// import {Component} from 'react'

// class Ingredient extends Component {
//     render() {
//         return(
//         <div className='ingredient' onClick={() =>{this.props.addToBurger(this.props.ingredient)}}>
//             <h1>{this.props.ingredient.name}</h1>
//         </div>
//         )
//     }

// }

// export default Ingredient

export default function Ingredient({ingredient,addToBurger}) {
    console.log(addToBurger)
    return (
        <div className='ingredient' onClick={() =>{addToBurger(ingredient)}}>
            <h1>{ingredient.name}</h1>
        </div>
    )
}