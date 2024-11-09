import React, { useEffect, useState } from 'react'
import ShopCard from './ShopCard'

const Shop = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((d)=>setData(d)).catch((err)=>console.log(err))
    },[])
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {data && data.map((val)=>{return (<>
        <ShopCard data={val}/>
        
        </>)})}
    </div>
  )
}

export default Shop