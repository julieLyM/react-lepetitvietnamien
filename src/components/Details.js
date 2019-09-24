import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Button } from 'react-bulma-components'
import { Link } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default class Details extends Component {
  render() {
    return (
      <DetailStyle>
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="detail-bloc">
              <div className="detail-title">
                <h1 className="title is-1"> {title}</h1>
              </div>
              <div>
                <img src={img} className="detail-img" alt="product" />
              </div>
              <div className="detail-company">
                <p className="title is-5">made by :</p>
                <span>{company}</span>
              </div>
              <div className="detail-price">
                <h5 className="title is-5">price :</h5>
                <span>{price} €</span>
              </div>
              <div className="detail-info">
                <h5 className="title is-5">description :</h5>
                <span>{info}</span>
              </div>
              <div className="detail-bloc-btn">
              <Link to="/">
                <Button>
                  Retour
                  </Button>
              </Link>
              <Button
                cart
                color="primary"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }

                }
              >
                {inCart ? "Dans le panier" : "Mettre le panier"}
              </Button>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
      </DetailStyle>
    )
  }
}
const DetailStyle = styled.div`
.detail-bloc {
  display: flex;
  flex-direction: column;
}

.detail-img {
  width: 40%;
}
.detail-bloc-btn {
  align-items: center;
  margin: 10px auto;
}
`