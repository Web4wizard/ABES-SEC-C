import React from 'react'

function Book(props) {
  return (
    <div>
        <img src={props.img} alt={props.title} width="128" height="192"/>
        <div>
            <h1></h1>
            <p>TítLE: {props.title}</p>
            <p>PRICE: {props.price}</p>
        </div>
    </div>
  )
}

export default Book