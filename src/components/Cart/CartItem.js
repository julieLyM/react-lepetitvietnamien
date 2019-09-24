import React from 'react'
import styled from "styled-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <CartItemStyled>
      <div className="columns cart-item-bloc">
        <div className="column">
          <img src={img} style={{ width: "5rem", height: "5rem" }} className="img" alt="product" />
        </div>

        <div className="column">{title}</div>
        <div className="column">{price}</div>
        <div className="column">
          <span className="btn" onClick={() => decrement(id)}> - </span>
          <span>{count}</span>
          <span className="btn" onClick={() => increment(id)}> + </span>
        </div>
        <div className="column">
          <img src="img/trash.png" style={{ width: "1rem", height: "1rem" }} alt="icon" className="trash" onClick={() => removeItem(id)} />
        </div>
        <div className="column">
          <strong>{total} €</strong>
        </div>
      </div>
    </CartItemStyled>
  )
}

const CartItemStyled = styled.div`
.cart-item-bloc{
    display: flex;
    margin: 20px auto;
    width: 100%;
`

