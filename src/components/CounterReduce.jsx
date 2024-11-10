import React, { useReducer, useState } from 'react'

let initalState = {count:0};
function counterFn(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        case 'incrementBy5':
            return {count:state.count+5};
        case 'reset':
            return {count:0}
        default:
            throw new Error('Unknown action')
    }
}
let initalTodo = [];
function todoFn(state,action){
    switch(action.type){
        case "addToDo":
        return  [...state,{id:Date.now(),task: action.payload}];
        case 'removeToDo':
            return state.filter((val)=>val.id !== action.payload)
        default:
             throw new Error('Unknown action');
    }
}

const CounterReduce = () => {
    const [state,dispatch] = useReducer(counterFn,initalState);
    const [todo,dispatch1] = useReducer(todoFn,initalTodo);
    const [inTodo,setInTodo] = useState('');
    console.log(todo);
    
    
  return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:'increment'})}>inc</button>
    <button onClick={()=>dispatch({type:'decrement'})}>dec</button>
    <button onClick={()=>dispatch({type:'reset'})}>reset</button> 
    <button onClick={()=>dispatch({type:'incrementBy5'})}>inc+5</button>
    <h1>todo</h1>
    <input type='text' placeholder='enter task' onChange={(e)=>setInTodo(e.target.value)}></input>
    <button onClick={()=>dispatch1({type:'addToDo',payload :inTodo})}>enter task</button>

    {todo.length && (todo.map((t)=>{
       return (<><h3>{t.task}</h3>
        <button onClick={()=>dispatch1({type:'removeToDo',payload:t.id})}>del</button></>)
    }))}
    </div>
  )
}

export default CounterReduce