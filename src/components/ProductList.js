import React from 'react';
import Title from './Title';
import { ProductConsumer } from '../context'
import Product from './Product';
export default class ProductList extends React.Component {



  render() {
    return (
      <React.Fragment>
        <div>
          <Title name="presentation des produits du petit vietnamien" title="" />
          <div>
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