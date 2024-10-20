import React, { useState } from 'react'
import "./RecipeForm.css"

const RecipeForm = ({onSubmit,initialRecipe}) => {
    const [name,setName]= useState(initialRecipe ? initialRecipe.name : '');
    const [ingredients,setIngredients] = useState(initialRecipe ? initialRecipe.ingredients : '');
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit({name,ingredients});
        setName('');
        setIngredients('');
    }
  return (
    <>
    <input type='text' value={name} placeholder='Recipe name' onChange={(e)=>setName(e.target.value)}></input>
    <textarea type="text" value={ingredients} placeholder='ingredient' onChange={(e)=>setIngredients(e.target.value)} > </textarea>
    <button onClick={(e)=>handleSubmit(e)}>submit </button>
    
    
    </>
  )
}

export default RecipeForm