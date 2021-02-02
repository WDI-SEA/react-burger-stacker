import React, { Component } from 'react';

class Toppings extends Component {
    render() {
        return (
            <ul className="Toppings">
                {this.props.toppings.map((topping) => {
                    return (<li>{topping.name}, color:{topping.color}</li>)
                })}
            </ul>
        )
    }
}

export default Toppings;