import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './Product.scss'

export default class Product extends Component {

  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <div className="bloc-product columns is-desktop">
        <div className="card column">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-product"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} className="img-link" alt="image" />
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
              </div>
            )}
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
      </div >
    )
  }
}
