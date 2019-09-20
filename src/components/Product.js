import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import './Product.css'

export default class Product extends Component {

  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper>
        <div className="card">
          <ProductConsumer>
            {(value) => (<div
              className="img-container"
              onClick={() =>value.handleDetail(id)}
            >
              <Link to="/details">
                <img
                  src={img}
                  alt="product"
                  className="card-img-top"
                />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                value.addToCart(id);
                value.openModal(id);
                }}
                >


                {inCart ? (
                  <p disabled>
                    {""}
                    In cart
            </p>
                ) : (
                    <img src="img/cart.png" className="icon" alt="icon" />
                  )}
              </button>
            </div>)}

          </ProductConsumer>
          {/* card-footer */}
          <div className="card-footer">
            <span>
              <h4>{title}</h4>
              </span>
            <span>
              <h4>$ {price}</h4>
              </span>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition: all 1s linear;
}

.card-footer {
  background:transparent;
  border-top:transparent;
  transition: all 1s linear;
}
&:hover{
  .card {
    border:0.004rem solid pink;
    box-shadow: grey 2px ;
  }

  .card-footer{
    background:pink;
  }
}

.img-container{
  position: relative;
  overflow:hidden;
}

.img-container:hover .card-img-top {
  transform: scale(1.2);
}
.cart-btn {
  position:absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  border: 1px purple solid;
  transform: translate(100%, 100%);
  font-size:1.4rem;
  border-radius: 0.5rem;
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
}
`
