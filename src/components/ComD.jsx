import React from 'react'
import ComE from './ComE'
import ComF from './ComF'

const ComD = ({data}) => {
    console.log(data);
  return (
    <div>ComD
    <h6>inside comD</h6>
    <ComE/>
    <ComF arrData={data}/>
    </div>
  )
}

export default ComD