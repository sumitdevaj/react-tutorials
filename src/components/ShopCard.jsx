import React from 'react'
import './ShopCard.css'

const ShopCard = ({data}) => {
    console.log(data,"xsssssssdeffd");
    
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