import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bulma-components'
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default class Navbar extends React.Component {
  render() {
    return (
      <NavStyle>
        <div className="nav-page">
          <div className="navbar-brand">
            <Link to="/" href="/">
              <img src="img/logo.jpg" className="logo-restau" alt="logo" />
            </Link>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  Produits
                </Link>
                <Link to="/menu" className="navbar-item">
                  Menu
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/cart">
                    <Button color="primary">
                      <figure className="image is-32x32">
                        <img
                          src="img/cart.png"
                          alt="icon"
                        />
                      </figure>
                      <strong>
                        Mon panier
                  </strong>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavStyle>
    )
  }
}

const NavStyle = styled.div`

.logo-restau {
  width:80px;
  margin: 10px 10px;
}

.nav-page {
  background: white;
}
`
