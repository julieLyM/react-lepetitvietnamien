import React from 'react'
import "./CartItem.css"

export default function CartItem({item,value}) {
  const {id, title,img,price,total,count} = item;
  const {increment,decrement,removeItem} = value;
  return (
    <div className="container-bloc">
      <div className="img-bloc">
        <img src={img} style={{width:"5rem" ,height: "5rem"}} className="img" alt="product"/>
      </div>
      <div>{title}</div>
      <div>{price}</div>
      <div>
        <span className="btn" onClick={() => decrement(id)}> - </span>
        <span>{count}</span>
        <span className="btn" onClick={() => increment(id)}> + </span>
      </div>
      <div>
        <img src="img/trash.png" style={{ width: "1rem", height: "1rem" }} alt="icon" className="trash" onClick={() => removeItem(id)} />
      </div>
      <div>
        <strong> Item total : $ {total}</strong>
      </div>
    </div>
  )
}
