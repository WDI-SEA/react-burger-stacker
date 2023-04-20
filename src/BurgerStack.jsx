import React, { Component } from 'react'



export default class BurgerStack extends Component{

    render(){

        const finalBurger = this.props.burger.map((item, i) => {
            return(
                <ul key={`item ${i}`}>
                    {item}
                </ul>
            )
        })

        return(
            <div>
                {finalBurger}
            </div>
        )
    }
}