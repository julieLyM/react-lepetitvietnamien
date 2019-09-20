import React from 'react'
import { Link } from 'react-router-dom'
export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, cleanCart } = value;
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="row">
          <Link to="/">
            <button
              type="button"
              onClick={() => { cleanCart() }}
            >
              clear
          </button>
          </Link>
          <h5>subtotal :
            <span>$ {cartSubTotal}</span>
          </h5>
          <h5>Tax :
            <span>$ {cartTax}</span>
          </h5>
          <h5>Total :
            <span>$ {cartTotal}</span>
          </h5>
        </div>
      </div>
    </React.Fragment>
  )
}
