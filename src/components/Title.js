import React from 'react'
import styled from 'styled-components';

export default function Title({name, title}) {
  return (
    <TitleStyle>
    <div className="title">
      <h1>
      {name}
      <strong> {title}</strong>
      </h1>
    </div>
    </TitleStyle>
  )
}
const TitleStyle = styled.div`

.title {
  margin-top: 25px;
  text-align: center;
}
`
