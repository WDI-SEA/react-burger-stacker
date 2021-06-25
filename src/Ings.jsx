// FUNCTIONAL COMPONENT METHOD
const Ings = (props) => {
    return (
        <button style={{backgroundColor: props.color}}>
            {props.name}
        </button>
    )
}
export default Ings

// CLASS-BASED VERSION
// import React, { Component } from 'react'

// export default class Ings extends Component {
//     render() {
//         return (
//             <button style={{backgroundColor: this.props.color}}>
//                 {this.props.name}
//             </button>
//         )
//     }
// }