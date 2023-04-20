import React, { Component } from 'react';

class ClearBurger extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClearBurger } = this.props;

    onClearBurger();
  }

  render() {
    return <button onClick={this.handleClick}>Clear Burger</button>;
  }
}

export default ClearBurger;
