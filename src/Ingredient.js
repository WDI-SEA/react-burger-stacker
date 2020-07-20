import React from 'react'

const Ingredient = (props) => {
  return (
    <div>
      <h3>{props.ingredient}</h3>
      <style jsx>
        {`
          #${props.ingredient.name} {
            background-color: ${props.ingredient.color}
          }
        `}
      </style>
    </div>
  )
}

export default Ingredient