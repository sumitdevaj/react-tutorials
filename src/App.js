import React, { useState } from 'react'
import ComA from './components/ComA'
import ComD from './components/ComD'

const App = () => {
  const [arr,setArr]= useState([1,2,3,4,5,6]);
  return (
    <div>
    <ComA previousData = {arr} changFn ={setArr}/>
    <ComD data={arr}/>
    </div>
  )
}

export default App