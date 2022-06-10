import React, { Component } from 'react'

export default class Ingredient extends Component {

    render() {
        return (
            <>
                <div>
                    <form className='flex justify-evenly'>
                        <p className="text-xs" style={{color: `${this.props.ingred.color}`}}>{this.props.ingred.name}</p>
                        {console.log(this.props.ingred)}
                        { this.props.isBurgerPane === false ? 
                        <button
                            className='text-xs'
                            type="button"
                            onClick={()=>{this.props.handleAddIngredientClick(this.props.ingred)}}
                        >add</button>
                    : ""}
                    </form>
                </div>
            </>
        )
    }
}
