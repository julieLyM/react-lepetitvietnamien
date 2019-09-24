import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default class Product extends Component {

  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper>
          <div className="card">
            <ProductConsumer>
              {(value) => (
                <div
                  className="img-container"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <figure className="image is-4by3">
                      <img src={img} className="image-cart" alt="image" />
                    </figure>
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
                        Dans le panier
                      </p>
                    ) : (
                        <img src="img/cart.png" className="logo-cart" alt="icon" />
                      )}
                  </button>
                </div>)}
            </ProductConsumer>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  {title}
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                prix : {price} €
              </span>
              </p>
            </footer>
          </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition: all 1s linear;
  height:290px;
  max-width:350px;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
  padding: 10px 0 0 0;
}

.card-footer {
  background:transparent;
  border-top:transparent;
  transition: all 0.5s linear;
  margin-top: 10px;
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
  height: 200px;
  width: 200px;
  margin: 10px auto 11px;

  .cart-btn {
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 75px;
    margin: 15px 0 8px 60px;

    }

  .logo-cart {
    height: 30px;
    width: 30px;
  }
}
`
