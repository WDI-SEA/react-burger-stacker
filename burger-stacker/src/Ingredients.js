import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        const allIngredients = this.props.theIngredients.map((ingredients) =>{
            return (
              <div className="film-row">
                <h4>{ingredients.name}</h4>
              </div>
            )
          })
        return (
          <div>
            <div className="film-list">
                {allIngredients}
            </div>
          </div>
        );
      }
    }


