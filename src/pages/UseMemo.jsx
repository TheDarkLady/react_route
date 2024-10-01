import React, { useMemo, useState } from 'react'
import UseFetch from '../hooks/UseFetch'
export default function UseMemo() {
    const {data, loading} = UseFetch("https://dummyjson.com/products")
    const [flag, setFlag] = useState(false)
    function FilterProductByPrice(getProducts) {
      console.log("This function is renderd")
        return getProducts?.length > 0 ? (getProducts.filter(singleProductItem => singleProductItem.price > 50)): []
    }
    const memorizedVersion = useMemo(() => FilterProductByPrice(data?.products), [data?.products])
    if (loading) {
        return <h1>Fetching Products! Please Wait</h1>
    }
    const products = data?.products
    console.log(products)
  return (
    <>
      <h1 style={{color: flag ? "red" : "black"}}>Use Memo</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      <ul>
        {
            memorizedVersion.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))
        }
      </ul>
    </>
  )
}
