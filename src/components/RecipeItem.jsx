import React from 'react'

const RecipeItem = ({recipe,onEdit,onDelete}) => {
    console.log({recipe,onEdit,onDelete},"fff");
    
  return (
    <>
    <h1>kjfkd</h1>
    <h2>{recipe.name}</h2>
    <p>{recipe.ingredient}</p>
    <button onClick={onEdit} >Edit</button>
    <button onClick={onDelete}>Delete</button>
    </>
  )
}

export default RecipeItem