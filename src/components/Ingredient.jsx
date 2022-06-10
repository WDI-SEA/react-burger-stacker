import React, { Component } from 'react'

export default class Ingredient extends Component {

    render() {
        return (
            <>
                <div style={{backgroundColor: "gray" }}>
                    <form>
                        <p style={{color: `${this.props.ingred.color}`}}>{this.props.ingred.name}</p>
                    
                        {/* <input
                        name="color"
                        readOnly= {this.props.ingred.color}
                        hidden
                        /> */}
                        { this.props.isBurgerPane === false ? 
                        <button
                            type="submit"
                            name="name"
                            value={this.props.ingred.name}
                            onClick={this.props.handleAddIngredientClick}
                        >add to burger</button>
                    : ""}
                    </form>
                </div>
            </>
        )
    }
}
