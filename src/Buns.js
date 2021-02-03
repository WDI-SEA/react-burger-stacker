import React, { Component } from 'react'

class Buns extends Component {
    render() {
        return (
            <section>
                <ul className="Buns">
                    {this.props.buns.map((bun, index) => {
                        console.log(this.props, "bun bun bun")
                        return (
                            <section>
                                <li key={index}>{bun.name}</li>
                                <form>
                                    <button value={this.props.buns.name} onClick={(e) => this.props.addIngredient(e)}>add bun</button>
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

export default Buns;