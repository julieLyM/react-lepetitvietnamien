import React, { Component } from 'react'
import styled from "styled-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';
export default class CartColumn extends Component {
  render() {
    return (
      <CartColumnStyled>
        <div className="columns column-bloc">
          <div className="column test">
            <p className="cart-col-title">Produits</p>
          </div>
          <div className="column test">
            <p className="cart-col-title">Nom</p>
          </div>
          <div className="column test">
            <p className="cart-col-title">Prix</p>
          </div>
          <div className="column test">
            <p className="cart-col-title">Quantité</p>
          </div>
          <div className="column test">
            <p className="cart-col-title">Enlever</p>
          </div>
          <div className="column test">
            <p className="cart-col-title">Total</p>
          </div>
        </div>
      </CartColumnStyled>
    )
  }
}

const CartColumnStyled = styled.div`
.column-bloc {
  text-transform: uppercase;
  font-size: 1em;
  display: flex;
  margin: 20px auto;
  width: 80%;

}

.cart-col-title{
  color: blue;
  margin: 0;
}

  @media screen and (min-width: 200px) and (max-width: 640px) {
    .test {
     display: none;
    }
  }
`
