import React, { Component } from 'react'

const Ingredients = props => {
  
        let allIngredients = props.completeIngredients.map((item, index) => {
            return <p key={index}>{item.name}
            <button name={item.name} onClick={(e) => props.changedIngredients(e, index)}>
                Add it</button>
            </p>
        })

        return (
          <div>
            <div className="film-list">
                   {allIngredients}
            </div>
          </div>
        );
  }

export default Ingredients


