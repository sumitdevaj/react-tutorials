import React, { useState } from 'react'

const ComB = ({piyush,rahul}) => {
    const [inputV,setInputV] = useState('');
    const handleSubmit = () =>{
        piyush([...rahul, inputV])
    }
  return (
    <div>ComB
    <input type='text' placeholder='enter some value' value={inputV} onChange={(e)=>setInputV(e.target.value)} ></input>
    <button onClick ={handleSubmit}>submit </button>
    </div>
  )
}

export default ComB