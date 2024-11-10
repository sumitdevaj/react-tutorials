import React from 'react'
import './ShopCard.css'
import { useAuth } from './context/authContext'

const ShopCard = ({data}) => {
  const { addToCart} =  useAuth()
  return (
    <div className='main'>
     {data.id}{data.title}{data.price}
     <div>
     <img src={data.image}></img>
     </div>
     rating {data.rating.rate}
      <button onClick={addToCart}>add to cart</button>

    </div>
  )
}

export default ShopCard

console.log(null+1);
