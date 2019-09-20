import React, { Component } from 'react'
import './CartColumns.css'
export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="cart-columns-text">
          <p>products</p>
        </div>
        <div className="cart-columns-text">
          <p>name of products</p>
        </div>
        <div className="cart-columns-text">
          <p>price</p>
        </div>
        <div className="cart-columns-text">
          <p>quantity</p>
        </div>
        <div className="cart-columns-text">
          <p>remove</p>
        </div>
        <div className="cart-columns-text">
          <p>Total</p>
        </div>
      </div>
    )
  }
}
