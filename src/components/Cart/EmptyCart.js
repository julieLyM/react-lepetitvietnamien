import React from 'react'
import styled from 'styled-components';

export default function EmptyCart() {
  return (
    <EmptyStyle>
        <p className="title is-2 empty-page">Your cart is empty</p>
    </EmptyStyle>
  )
}

const EmptyStyle = styled.div`
.empty-page {
  color: pink;
  text-align: center;
}
`
