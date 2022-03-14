import { Component } from "react";

// class ClearBurger extends Component {

//   handleClearBtn = () => {
//     console.log('clear')
//   }

//   render() {
//     return (
      // <div className="center-btn">
      //   <button className="clear-btn" onClick={this.props.trashPlate}>Clear</button>
      // </div>
//         )
//   }
// }

const ClearBurger = ({ trashPlate }) => {
  
  return (
    <div className="center-btn">
      <button className="clear-btn" onClick={() => trashPlate()}>Clear</button>
  </div>
  )
}

export default ClearBurger