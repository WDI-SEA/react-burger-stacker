import React, { Component, useState } from 'react'

export default function Ingredients(props) {

    return(
      <div>
        <h1 style={{backgroundColor: props.ingredient.color}}> {props.ingredient.name}</h1>
      </div>
    )
}
