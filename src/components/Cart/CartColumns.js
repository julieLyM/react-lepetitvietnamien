import React, { Component } from 'react'
export default class CartColumn extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <p>products</p>
        </div>
        <div className="column">
          <p>name of products</p>
        </div>
        <div className="column">
          <p>price</p>
        </div>
        <div className="column">
          <p>quantity</p>
        </div>
        <div className="column">
          <p>remove</p>
        </div>
        <div className="column">
          <p>Total</p>
        </div>
      </div>
    )
  }
}
