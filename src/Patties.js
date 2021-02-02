import React, { Component } from 'react';

class Patties extends Component {
    render() {
        return (
            <ul className="Patties">
                {this.props.patties.map((patty) => {
                    return (<li>{patty.name}, color:{patty.color}</li>)
                })}
            </ul>
        )
    }
}

export default Patties;