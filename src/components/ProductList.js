import React from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';
import Product from './Product';
import './ProductList.scss';

export default class ProductList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="product-bloc">
          <Title name="Restaurant le petit vietnamien" title="" />
          <article class="message">
            <div class="message-body">
              <p>
                Bienvenue sur le site du restaurant "Le petit Vietnamien", decouvrez les specialités de la street food
                franco-vietnamienne dans un décor épuré et chaleureux !
                Retrouvez les savoureux Bo Bun et les Mi Xao cuisinés par la propriétaire de
                l'etablissement, Elisia, ainsi que les délicieux bubble tea et les fameux dessert au riz à la banane...
              </p>
            </div>
          </article>
          <div className="product-grid">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product
                    key={product.id}
                    product={product}
                  />
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
