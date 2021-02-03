import React, { Component } from 'react'
import BurgerStack from './BurgerStack'


class Patties extends Component {
    render() {
        return (
            <section>
                <ul className="Patties">
                    {this.props.patties.map((patty, index) => {
                        console.log(this.props, "patt patt")
                        return (
                            <section>
                                <li key={index}>{patty.name}</li>
                                <form>
                                    <button value={this.props.patties.ingredients} onClick={(e) => this.props.updateIngredient(e)}>add patty</button>
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

export default Patties;