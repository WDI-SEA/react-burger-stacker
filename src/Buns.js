import React, { Component } from 'react'

class Buns extends Component {
    constructor(props) {
        super()

        // this.state = {
        //     burger: this.props.buns,
        //     newIngredient: ''
        //   }
    }

    // addIngredient = (e) => {
    //     let tempOrderArray = this.state.burger
    //     console.log(tempOrderArray, 'temp temp')
    //     tempOrderArray.push(this.state.newIngredient)
    //     this.setState({burger: tempOrderArray})
    // }

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
                                    <button onClick={(e) => this.props.addIngredient(e, bun.name)}>add bun</button>
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