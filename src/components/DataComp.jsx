import React, { useEffect, useState } from 'react'

const DataComp = () => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [id,setId] =useState(1)
    useEffect(()=>{
        console.log("mounting");
        
        const fetchData = async()=>{
            setLoading(true);
            setError(null);
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                if(!response.ok){
                    throw new Error("error in fetching JSON")
                }
                const fRes =await response.json();
                console.log(fRes);
                
                setData(fRes)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
        return ()=>{
            console.log("removed from ui ");
            
        }
    },[id])
    if(loading) return <div>loading... </div>;
    if(error) return <div> Error : {error}</div>
  return (
    <div>
    <h1>data </h1>
    <pre>{JSON.stringify(data,null,2)} </pre>
    <button onClick={()=>setId(id+1)}>+</button>
    </div>
  )
}

export default DataComp