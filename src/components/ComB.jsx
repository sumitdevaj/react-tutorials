import React from 'react'
import { useParams } from 'react-router-dom'

const ComB = () => {
    let data=useParams();
    console.log(data);
    
  return (
    <div>page not found</div>
  )
}

export default ComB