import React, { useEffect, useState } from 'react'
import ShopCard from './ShopCard'
import { useAuth } from './context/authContext'

const Shop = () => {
    const [data,setData] = useState([])
    let {count} = useAuth()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((d)=>setData(d)).catch((err)=>console.log(err))
    },[])
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
    <h1>{count}</h1>
    {data && data.map((val)=>{return (<>
        <ShopCard data={val}/>
        
        </>)})}
    </div>
  )
}

export default Shop