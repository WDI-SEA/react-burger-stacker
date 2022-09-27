import React, {Component} from 'react';

export default class Ingredients extends Component {
  render(){
    return(
        <button>{this.props.ingredient}</button>
    )
  }
}