import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div>
        <h3>404</h3>
        <h3>error</h3>
        <h3>page not found</h3>
        <h3>the request URL<span>{this.props.location.pathname}</span>
          was not found</h3>
      </div>
    )
  }
}
