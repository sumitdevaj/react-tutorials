import { useState } from "react"

const useCounter = (iv,step)=>{
    const [count,setCount] = useState(iv);
    const inc=()=>setCount(count+step);
    const dec = ()=>setCount(count-step);
    const reset = ()=>setCount(iv);
    return(count,inc,dec,reset)
}
export default useCounter