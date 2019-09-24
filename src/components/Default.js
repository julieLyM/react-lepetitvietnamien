import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div>
        <h2>404</h2>
        <h2>error</h2>
        <h2>page not found</h2>
        <h2>the request URL<span>{this.props.location.pathname} </span>
          was not found</h2>
      </div>
    )
  }
}
