import React, { Component } from 'react'
import styled from 'styled-components';

export default class Default extends Component {
  render() {
    return (
      <DefaultStyle>
        <div className="bloc-default">
        <h2 className="title is-2">404</h2>
        <h2 className="title is-2">error</h2>
        <h2 className="title is-2">page not found</h2>
        <h2 className="title is-2">the request URL<span className="title is-2 url">{this.props.location.pathname} </span>
          was not found</h2>
        </div>
        </ DefaultStyle>
    )
  }
}

const DefaultStyle = styled.div`

.bloc-default {
  text-align: center;
}

.url {
  color: red;
}

`

