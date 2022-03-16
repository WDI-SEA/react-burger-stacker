import './App.css';

export default function Clear({clearBurger}) {
    return (
        <button onClick={clearBurger}>Start Over</button>
    )
  }
// class Clear extends Component {
//   render() {
//     return (
//         <button onClick={this.props.clearBurger}>Start Over</button>
//     )
//   }
// }

// export default Clear;