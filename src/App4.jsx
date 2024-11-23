import React from 'react'
import useFetchData from './components/useFetchData'

const App4 = () => {
    let {data,loading,error}=useFetchData('https://dummyjson.com/products')
    console.log({data,loading,error});
    
  return (
    <div>{loading}</div>
  )
}

export default App4