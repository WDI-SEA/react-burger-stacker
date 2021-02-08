import React, { Component } from 'react'




class BurgerLife extends Component {
    render() {
        return (
            <div>

                <p>{this.props.burger}</p>
                {console.log(this.props.burger)}
            </div>

        )
    }
}


export default BurgerLife