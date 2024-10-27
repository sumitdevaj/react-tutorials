import React from 'react'
import { useParams } from 'react-router-dom'

const ComB = () => {
    let data=useParams();
    console.log(data);
    
  return (
    <div>welcome here {data.name}</div>
  )
}

export default ComB