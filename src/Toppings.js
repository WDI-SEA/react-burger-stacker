import React, { Component } from 'react'


class Toppings extends Component {
    render() {
        return (
            <section>
                <ul className="Toppings">
                    {this.props.toppings.map((topping, index) => {
                        console.log(this.props, "TOP TOP TOP")
                        return (
                            <section>
                                <li key={index}>{topping.name}</li>
                                <form>
                                    <button value={this.props.toppings.ingredients} onClick={(e) => this.props.updateIngredient(e)}>add topping</button>
                                    {/* <button type="submit" onClick={(e) => this.removeBuns(e)}>remove bun</button> */}
                                </form>
                            </section>
                            )
                    })}
                </ul>
            </section>
        )
    }
}

export default Toppings;