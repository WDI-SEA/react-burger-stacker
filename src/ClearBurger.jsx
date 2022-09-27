import React, {Component} from 'react';

export default class ClearBurger extends Component {
  render(){
    return(
      <div >
        <button onClick={this.props.ClearBurger}>Clear Burger</button>
      </div>
    )
  }
}