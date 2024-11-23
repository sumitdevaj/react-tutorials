import React from 'react'
import useFetchData from './components/useFetchData'
import useCounter from './useCounter'

const App4 = () => {
    let {data,loading,error}=useFetchData('https://dummyjson.com/products')
    // console.log({data,loading,error});
    let {count,inc,dec,reset}=useCounter(0,1);
    console.log({count,inc,dec,reset});
    
    
  return (
    // <div>{loading}</div>
    <></>
  )
}

export default App4