import React from 'react'
import img from '../../images/Image.jpg'
function Card() {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <p>Apollo Running Short</p>
        <p>$50.00</p>
    </div>
  )
}

export default Card