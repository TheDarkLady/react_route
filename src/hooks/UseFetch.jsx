
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function UseFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    async function fetchData() {
        setLoading(true)
        try {
            const res = await fetch(url, {...options})
           if(!res.ok) {
            throw new Error(res.statusText)
           }
           const result = await res.json()
           if(result){
               setData(result)
               setError(null)
               setLoading(false)
           }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        } 
    }
    useEffect(() => {
        fetchData()
    }, [url])
  return{
      data,
      error,
      loading
  }
}
