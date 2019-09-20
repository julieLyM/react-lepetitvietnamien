import React from 'react'
import './Title.css'
export default function Title({name, title}) {
  return (
    <div className="title-name">
      <h1>
      {name}
      <strong> {title}</strong>
      </h1>
    </div>
  )
}
