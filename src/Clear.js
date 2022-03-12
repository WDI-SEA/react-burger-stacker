// import './App.css'
// import {Component} from 'react'

// class Clear extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.clearBurger}>Start Over</button>
//             </div>
//         )
//     }

// }

// export default Clear

export default function Clear({clearBurger}) {
    return (
        <div>
            <button onClick={clearBurger}>Start Over</button>
        </div>
    )
}