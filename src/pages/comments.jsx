 
 import React from 'react'
 import UseFetch from '../hooks/UseFetch'
 export default function CommentsList() {
    const { data, error, loading} = UseFetch("https://dummyjson.com/comments")
    if (loading) {
        return <h1>Fetching Comments! Please Wait</h1>
    }
    if (error) {
        return <h1>Error fetching comments: {error.message}</h1>
    }
    const comments = data?.comments
    console.log(comments)
   
   return (
     <div>
       <h1>Comments List</h1>
       {
         (comments && comments.length && comments.length > 0) ? (
           comments.map((comment) => (
             <div key={comment.id}>
               <label>{comment.body}</label>
             </div>
           ))
         ) : (
           <p>No comments available</p>
         )
       }
     </div>
   )
 }
 