import React from 'react'

const List = ({lists,onDelete}) => {
    console.log({lists,onDelete});
    
  return (
    <>
    {lists && lists.map((data,key)=>{
        return (<><h1 key={key} style={{color:"red",backgroundColor:"greenyellow"}}>{data}</h1>
            <p onClick={()=>onDelete(key)} >delete</p> </>)
    })}
    </>
  )
}

export default List