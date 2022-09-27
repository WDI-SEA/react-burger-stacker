import React, {Component} from 'react';

export default class Ingredients extends Component {
    handleChange = () => {

    }
  render(){
    return(
        <button style={{color: this.props.color}} onClick={this.handleChange()} value={this.props.ingredient}>{this.props.ingredient}</button>
    )
  }
}