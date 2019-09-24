import React, { Component } from 'react'

import { ProductConsumer } from '../../context'
import EmptyCart from './EmptyCart';
import CartColumn from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import Title from '../Title';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <section>
          <ProductConsumer>
            {value => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <React.Fragment>
                    <Title
                      title="Votre Panier"
                    />
                    <CartColumn/>
                    <CartList value={value} />
                    <CartTotals value={value} history={this.props.history} />
                  </React.Fragment>
                )
              } else {
                return <EmptyCart />
              }
            }}
          </ProductConsumer>
        </section>
      </div>
    )
  }
}
