import { Component } from 'react'


export default class Ingredient extends Component {
  render() {
      return(
          <div
              style={{
                  backgroundColor: this.props.item.color,
                  width:"200px",
                  height:"20px"
              }}
              onClick={this.props.handleAddToStack}
          >
              {this.props.item.name}
          </div>
      )
  }
}
// export default class Ingredients extends Component {
//   render(){
    
//     return(
//       'Ingredients'
//     )
//   }
// }