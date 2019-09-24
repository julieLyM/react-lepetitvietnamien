import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import { Link } from "react-router-dom";
import { Button } from 'react-bulma-components'

import styled from "styled-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="text">
                      <h5 className="title is-5">Le produit choisit</h5>
                      <img src={img} className="modal-img" alt="product" />
                      <h5>Produit :
                      <span className="title is-5"> {title}</span></h5>
                      <h5>Prix :
                        <span className="title is-5"> {price} €</span>
                        </h5>
                      <div className="btn-bloc">
                      <Link to="/">
                      <Button
                        onClick={() => closeModal()}
                      >
                        Retour
                      </Button>
                      </Link>
                      <Link to="/cart">
                        <Button
                          color="primary"
                          cart
                          onClick={() => closeModal()}
                        >
                          Aller dans le panier
                      </Button>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
  background-color: white;
};

.btn-bloc {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.modal-img {
  width: 30%;
}
`
