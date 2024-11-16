import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from './ProductSlice';

const StoreProduct = () => {
    const products = useSelector((state)=>state.products.products);
    console.log(products);
    const dispatch = useDispatch();


    
  return (
    <>
    <button onClick={()=>dispatch(addProducts({id:10,name:'toy'}))}>add product </button>
    {products  && products.length >0 ? products.map(product =>{return(<><h1>{product.name}</h1></>)}): <><h1>cart empty</h1></> }
    </>
  )
}

export default StoreProduct