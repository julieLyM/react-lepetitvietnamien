import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bulma-components'
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import PaypalButton from './PaypalButton';

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <CartResultStyle>
        <div className="total-paid-bloc">

        <Link to="/">
          <Button
            color='danger'
            type="button"
            onClick={() => { clearCart() }}
          >
            clear
          </Button>
        </Link>


        <h5>subtotal :
             <span> {cartSubTotal} €</span>
        </h5>

        <h5>Tax :
            <span> {cartTax} €</span>
        </h5>
        <h5>Total :
            <span> {cartTotal} €</span>
        </h5>
        <PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
        </div>
      </CartResultStyle>
    </React.Fragment>
  )
}
const CartResultStyle = styled.div`
.total-paid-bloc {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}
`
