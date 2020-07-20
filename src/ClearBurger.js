import React from 'react'

const ClearBurger = (props) => {
  return(
    <div>
      <button onClick={(e) => props.action(e)}>
         I'm a Burger
      </button>
    </div>
  )
}
export default ClearBurger