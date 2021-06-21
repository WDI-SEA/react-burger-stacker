import React, { Component } from 'react'

export default class Ings extends Component {
    render() {
        return (
            <button style={{backgroundColor: this.props.color}}>
                {this.props.name}
            </button>
        )
    }
}

// FUNCTIONAL COMPONENT METHOD
// import React from 'react'

// const Ings = (props) => {
//     return (
//         <p style={{backgroundColor: props.color}}>
//             {props.name}
//         </p>
//     )
// }

// export default Ings