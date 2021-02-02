import React, { Component } from 'react';

class Buns extends Component {
    render() {
        return (
            <ul className="Buns">
                {this.props.buns.map((bun) => {
                    return (<li>{bun.name}, color:{bun.color}</li>)
                })}
            </ul>
        )
    }
}

export default Buns;