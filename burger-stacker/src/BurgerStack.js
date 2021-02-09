import React, { Component, useState } from 'react'

export default function BurgerStack(props) {

  return (
    <div>
          <h1 style={{ backgroundColor: props.burgerPart.color }}> {props.burgerPart.name}</h1>
    </div>
  )
}

