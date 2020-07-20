import React, {useState} from 'react'



const BurgerList = (props) => {




    let stack = props.isAdded.forEach((item, i) => {
        console.log(item)
        return (
            <div key={i}>
                {item}
            </div>
        )
    })

    return (
        <div>
            <h1>Order Up!</h1>
            {stack}
        </div>
    )
}

export default BurgerList