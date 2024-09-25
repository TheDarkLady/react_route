import React from 'react'
import { useParams } from 'react-router-dom'
export default function RecipeDetails() {
    const params = useParams()
    console.log(params)
    const {id} = params
  return (
    <div>
      <h1>Recipe Details of item { id }</h1>
    </div>
  )
}
