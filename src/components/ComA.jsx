import React from 'react'
import ComB from './ComB'
import ComC from './ComC'

const ComA = ({changFn,previousData}) => {
  return (
    <div>ComA
    <h6>inside COMA</h6>
    <ComB piyush={changFn} rahul={previousData}  />
    <ComC/>
    </div>
  )
}

export default ComA