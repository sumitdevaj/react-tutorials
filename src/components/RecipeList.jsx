import React from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = ({recipes,onEdit,onDelete}) => {
    console.log({recipes,onEdit,onDelete});
  return (
    <div> {
         recipes.map((recipe,index)=>{
            console.log(recipe,"ccccc");
            
            <RecipeItem key={index} recipe={recipe} onEdit={()=>onEdit(recipe)} onDelete={()=>onDelete(index)}/>
        })
    }</div>
  )
}

export default RecipeList