import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div>
              <div className="detail-title">
                <h1> {title}</h1>
              </div>
              <div>
                <img src={img} className="img-fluid" alt="product" />
              </div>
              <div className="detail-company">
                <h4> {title}</h4>
                <p>made by :</p>
                <span>{company}</span>
              </div>
              <div className="detail-price">
                <h5>price :</h5>
                <span>{price}</span>
              </div>
              <div className="detail-info">
                <h5>description :</h5>
                <span>{info}</span>
              </div>
              <Link to="/">
                <button>
                  Back to products
                  </button>
              </Link>
              <button
                cart
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }

                }
              >
                {inCart ? "inCart" : "add to cart"}
              </button>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}