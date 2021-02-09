import React, { Component, useState } from 'react'

export default function BurgerStack(props) {

  return (
    <div>
      <ul>
        {props.burger.map((burgerPart, index) => {
          return(
            <li key={index} style={{ backgroundColor: burgerPart.color }}> {burgerPart.name}</li>
          )})}
      </ul>
    </div>
  )
}

