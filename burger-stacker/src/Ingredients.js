import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        let allIngredients = this.props.completeIngredients.map((item, index) => {
            return <p key={index}>{item.name}
            <button name={item.name} onClick={(e) => this.props.changedIngredients(e, index)}>
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
    }


