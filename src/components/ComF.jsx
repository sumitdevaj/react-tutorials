import React from 'react'

const ComF = ({arrData}) => {
    console.log(arrData);
    
  return (
    <>
    // short circuting
    {arrData && arrData.map((val)=>{
        return<h1>{val}</h1>
    })}
   
    </>
  )
}

export default ComF


