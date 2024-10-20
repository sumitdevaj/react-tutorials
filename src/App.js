import React, { useState } from 'react'
import ComA from './components/ComA'
import ComD from './components/ComD'
import DataComp from './components/DataComp';

const App = () => {
  const [arr,setArr]= useState([1,2,3,4,5,6]);
  return (
    <div>
    <DataComp/>
    </div>
  )
}

export default App