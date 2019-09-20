import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { ButtonContainer } from './Button';


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <Link to="/">
            <img src="img/Lepetitvietnamien.svg" className="logo" alt="logo" />
            <p className="test">Products</p>
          </Link>

          <Link to="/cart" className="cart-link">

            <ButtonContainer>
              <img src="img/cart.png" className="icon" alt="icon" />
              My Cart
            </ButtonContainer>
          </Link>
        </nav>
      </div>
    )
  }
}


