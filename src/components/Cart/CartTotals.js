import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';
export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="card-container">
        <div className="row">
          <Link to="/">
            <button
              type="button"
              onClick={() => { clearCart() }}
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
          <PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
        </div>
      </div>
    </React.Fragment>
  )
}
